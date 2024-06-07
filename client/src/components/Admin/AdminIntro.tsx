import { Form, Input, Button, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  ReloadData,
  SetPortFolioData,
} from '../../app/features/userDetailSlice';

const AdminIntro = () => {
  const portfolioData = useAppSelector((state) => state.app);
  const intro = portfolioData?.portfolioData?.intro[0]?.introduction;
  const dispatch = useAppDispatch();

  interface FormValues {
    introduction: string;
  }
  const onFinish = async (values: FormValues) => {
    try {
      const response = await axios.post(
        'http://localhost:8500/api/v1/update-intro',
        { ...values, _id: portfolioData?.portfolioData?.intro[0]._id }
      );

      if (response.status === 200) {
        const updatedIntro = response.data.data.introduction;
        dispatch(ReloadData(true));
        dispatch(SetPortFolioData(updatedIntro));
        toast.success('Introduction Updated Successfully', {
          position: 'top-right',
        });
      } else {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error updating introduction:', error);
      toast.error('Error updating introduction', {
        position: 'top-right',
      });
    } finally {
      window.location.reload();
    }
  };

  return (
    <div>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 30 }}
        layout="vertical"
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="introduction"
          label="Introduction"
          initialValue={intro}
          rules={[
            { required: true, message: 'Please input your about section!' },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Update About" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
            <Button type="default" htmlType="button">
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminIntro;
