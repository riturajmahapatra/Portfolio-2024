import { Form, Input, Button, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useAppSelector } from '../../app/hooks';

const AdminIntro = () => {
  const portfolioData = useAppSelector((state) => state.app);
  console.log(portfolioData);
  const intro = portfolioData?.portfolioData?.intro[0]?.introduction;
  console.log(intro);

  const [form] = useForm();
  const onFinish = async () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        form={form}
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
        >
          <Input placeholder="Intro" required />
          {intro}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="default"
              htmlType="button"
              onClick={() => form.resetFields()}
            >
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminIntro;
