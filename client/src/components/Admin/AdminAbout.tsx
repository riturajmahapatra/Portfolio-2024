import { Button, Form, Input, Space } from 'antd';
import toast from 'react-hot-toast';
import {
  ReloadData,
  SetPortFolioData,
} from '../../app/features/userDetailSlice';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const AdminAbout = () => {
  const portfolioData = useAppSelector((state) => state.app);
  const about = portfolioData?.portfolioData?.about[0]?.about;
  const dispatch = useAppDispatch();

  interface FormValues {
    about: string; // Change to 'about' instead of 'introduction'
  }

  const onFinish = async (values: FormValues) => {
    try {
      const response = await axios.post(
        'https://portfolio-2024-server.vercel.app/api/v1/update-about',
        { ...values, _id: portfolioData?.portfolioData?.about[0]._id }
      );

      if (response.status === 200) {
        const updatedAbout = response.data.data.about;
        dispatch(SetPortFolioData(updatedAbout));
        window.location.reload();
        dispatch(ReloadData(true));
        toast.success('About Updated Successfully', {
          position: 'top-right',
        });
      } else {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error updating about section:', error);
      toast.error('Error updating about section', {
        position: 'top-right',
      });
    }
  };

  return (
    <div>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 30 }}
        layout="vertical"
        style={{ maxWidth: 800 }}
        initialValues={{ about }}
        onFinish={onFinish}
      >
        <Form.Item
          name="about"
          label="About"
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

export default AdminAbout;
