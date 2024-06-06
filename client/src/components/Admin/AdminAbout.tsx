import { Form, Input } from 'antd';
const AdminAbout = () => {
  return (
    <div>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 30 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
      >
        <Form.Item name="about">
          <Input placeholder="About" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminAbout;
