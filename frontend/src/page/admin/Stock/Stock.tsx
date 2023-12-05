import React, { useState } from 'react';
import './Stock.css';
import { Layout, Form, Upload, ConfigProvider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import {
  Input,
  InputNumber,
  Select,

} from 'antd';
import Navbar from '../../../component/navbar/navbar';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';



const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });



const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}


const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '5',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '6',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '8',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '9',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const { Header, Content, Footer } = Layout;

function Stock() {
  
const [previewOpen, setPreviewOpen] = useState(false);
const [previewImage, setPreviewImage] = useState('');
const [previewTitle, setPreviewTitle] = useState('');
const [fileList, setFileList] = useState<UploadFile[]>([])
const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }



    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <ConfigProvider
    theme={{
      components: {
        Upload: {
          actionsColor:'red'
        },
      },
      token: {
        colorText: "black",
        colorPrimary: "black",
      },
    }}>
    <Layout>
      <Navbar />
      <Layout>

        <Content className='content1-bg'><h1 className='text-head'> STOCK </h1></Content>
        <Content className='content2-bg'>
          <div className='bg-form'>
            <h1 style={{ paddingLeft: '70px', paddingTop: '20px' }}>Add Product </h1>
            <Form
              labelCol={{ span: 25 }}
              wrapperCol={{ span: 20 }}
              layout="vertical"
              style={{ maxWidth: 800, paddingLeft: '150px', paddingTop: '50px', fontWeight: 'bold' }}

            >
              <Form.Item style={{ display: 'inline-block' }} labelCol={{ span: 25 }}>
                <Form.Item label="Product" wrapperCol={{ span: 20 }}>
                  <Input />
                </Form.Item>
                <Form.Item label="Price" labelCol={{ span: 25 }}>
                  <InputNumber />
                </Form.Item>
              </Form.Item>
              <Form.Item style={{ display: 'inline-block' }} >
                <Form.Item label="Quantity" style={{ position: 'absolute' }}>
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Type" style={{ width: '100px', paddingTop: '85px' }}>
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item style={{display:'inline-block',paddingLeft:'80px',paddingTop:'20px'}}>
                <div className='bg-upload'>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              </div>
              </Form.Item>
              <Button type="primary" htmlType="submit" className='text-button' style={{borderRadius:'20px',backgroundColor:'#FF6B35',
              position:'absolute',marginLeft:'200px',marginTop:'200px'}}>
                    Create Series
                  </Button>
            </Form>

          </div>
        </Content>
        <Content>
          <div className='bg-table'>
            <h1 style={{ paddingLeft: '70px', paddingTop: '50px' }}> Product </h1>
            <Table dataSource={data} style={{ paddingLeft: '50px', paddingRight: '50px' }}>
              <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
              </ColumnGroup>
              <Column title="Age" dataIndex="age" key="age" />
              <Column title="Address" dataIndex="address" key="address" />
              <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags: string[]) => (
                  <>
                    {tags.map((tag) => (
                      <Tag color="blue" key={tag}>
                        {tag}
                      </Tag>
                    ))}
                  </>
                )}
              />
              <Column
                title="Action"
                key="action"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <a>Invite {record.lastName}</a>
                    <a>Delete</a>
                  </Space>
                )}
              />
            </Table>


          </div>
        </Content>


      </Layout>
      <Footer>footer</Footer>
    </Layout>
    </ConfigProvider>
  )
}


export default Stock;
