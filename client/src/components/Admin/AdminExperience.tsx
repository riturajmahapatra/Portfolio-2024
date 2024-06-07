import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Button, Form, Input, Modal, message } from 'antd';
import { CgAddR } from 'react-icons/cg';
import {
  ReloadData,
  SetPortFolioData,
} from '../../app/features/userDetailSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Experience {
  _id: { $oid: string };
  title: string;
  company: string;
  location: string;
  description: string;
  date: string;
}

function AdminExperience() {
  const portfolioData = useAppSelector((state) => state.app);
  const experience = portfolioData?.portfolioData?.experiences;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectItemForEdit, setSelectItemForEdit] = useState<Experience | null>(
    null
  );
  const dispatch = useAppDispatch();

  const onFinish = async (values: Experience) => {
    try {
      let response;
      if (selectItemForEdit) {
        response = await axios.post(
          'http://localhost:8500/api/v1/update-experience',
          {
            ...values,
            _id: selectItemForEdit._id, // Use the _id of the selected item
          }
        );
      } else {
        response = await axios.post(
          'http://localhost:8500/api/v1/add-experience',
          values
        );
      }

      if (response.status === 200) {
        const newExperience = response.data.data.experiences;
        dispatch(SetPortFolioData(newExperience));
        setShowAddEditModal(false);
        setSelectItemForEdit(null);
        dispatch(ReloadData(true));
        toast.success('Experience Added Successfully', {
          position: 'top-right',
        });
      } else {
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      toast.error('Error adding experience', {
        position: 'top-right',
      });
      throw error;
    }
  };

  const onDelete = async (item: Experience) => {
    try {
      const response = await axios.post(
        'http://localhost:8500/api/v1/delete-experience',
        { _id: item._id }
      );

      if (response.status === 200) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      }
    } catch (error) {
      console.error('Error deleting experience:', error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-5">Experience</h2>
      <div className="flex flex-wrap -mx-4">
        {experience?.map((exp) => (
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-1">
                {exp.company} - {exp.location}
              </p>
              <p className="text-sm text-start">{exp.description}</p>
              <p className="text-gray-600 mt-auto">{exp.date}</p>
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  onClick={() => {
                    setSelectItemForEdit(exp);
                    setShowAddEditModal(true);
                  }}
                >
                  <AiFillEdit size={20} /> Edit
                </button>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 focus:outline-none ml-2"
                  onClick={() => onDelete(exp)}
                >
                  <AiFillDelete size={20} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setSelectItemForEdit(null);
            setShowAddEditModal(true);
          }}
          className=" absolute right-0 top-0  text-center"
        >
          <h1>
            <CgAddR size={20} className="mr-2" />
          </h1>
        </button>
      </div>

      <Modal
        open={showAddEditModal}
        title={selectItemForEdit ? 'Edit Experience' : 'Add New Experience'}
        onCancel={() => setShowAddEditModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            rules={[{ required: true, message: 'Please enter a company' }]}
          >
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} placeholder="Description" />
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input placeholder="Date" />
          </Form.Item>
          <div className="flex justify-end">
            <Button type="default" onClick={() => setShowAddEditModal(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {selectItemForEdit ? 'Edit' : 'Add'}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminExperience;
