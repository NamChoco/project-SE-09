import React, { useEffect, useState } from 'react';
import './Stock.css';
import { Layout, Form, Upload, ConfigProvider, Button, message, Modal, FloatButton, Popconfirm } from 'antd';
import { Space, Table, Tag } from 'antd';
import {
  Input,
  InputNumber,
  Select,

} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, DeleteTwoTone, QuestionCircleOutlined } from "@ant-design/icons";
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { StockInterface } from '../../../Interface/Istock';
import HeadStock from '../../../component/head-page/stock/headStock';
import { CategoriesInterface } from '../../../Interface/Icategories';
import { GetAdminByUsername, GetCategories } from '../../../services/https';
import NavbarAdmin from '../../../component/navbar/navbarAdmin';
import { StockStatusInterface } from '../../../Interface/Istockstatus';
import { CreateStock, DeleteStock, GetStock, GetStockByID, GetStockStatus, UpdateStock } from '../../../services/https/Stock';
import Cookies from 'js-cookie';
import { AdminInterface } from '../../../Interface/Iadmin';






const { Column, ColumnGroup } = Table;




const { Header, Content, Footer } = Layout;

function Stock() {


  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [fileList2, setFileList2] = useState<UploadFile[]>([])


  const [Categories, setCategories] = useState<CategoriesInterface[]>([]);
  const [Status, setStatus] = useState<StockStatusInterface[]>([]);
  const [admin, setAdmin] = useState<AdminInterface | undefined>(undefined);
  const [Stock, setStock] = useState<StockInterface[]>([]);
  const [Product, setProduct] = useState<StockInterface[]>([]);
  const [productID, setProductID] = useState<number | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProductImg, setModalProductImg] = useState<string | undefined>(undefined);

  useEffect(() => {

    Get_Categories();
    Get_StockStatus();
    GetUsersByUsername();
    Get_Stock();
  }, []);

  useEffect(() => {
    getUserById();
  }, [productID]);

  const Get_Categories = async () => {
    let res = await GetCategories();
    if (res) {
      console.log(res)
      setCategories(res)
    }
  };

  const Get_StockStatus = async () => {
    let res = await GetStockStatus();
    if (res) {
      console.log(res)
      setStatus(res)
    }
  };

  const Get_Stock = async () => {
    let res = await GetStock();
    if (res) {
      console.log(res)
      setStock(res)
    }
  };

  const username = Cookies.get('usernameAdmin');
  console.log(username)

  const GetUsersByUsername = async () => {
    let res = await GetAdminByUsername(username);
    if (res) {
      console.log(res)
      setAdmin(res);

    }
  };





  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const handleChange2: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList2(newFileList || undefined);


  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const uploadButton2 = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: StockInterface) => {
    const updatedValues = {
      ...values,
      ProductImg: fileList?.[0]?.thumbUrl,
      AdminID: admin?.ID,
      CategoriesID: Number(values.CategoriesID),
      StockStatusID: Number(values.StockStatusID)
    };
    console.log(updatedValues);

    let res = await CreateStock(updatedValues);
    console.log(res)
    if (res.status) {
      messageApi.open({
        type: "success",
        content: <span style={{ color: 'green' }}>
          บันทึกข้อมูลสำเร็จ
        </span>,
      });
      setTimeout(() => window.location.reload(), 800);
    } else {
      messageApi.open({
        type: "error",
        content: res.message,
        // <span style={{ color: 'red' }}> บันทึกข้อมูลไม่สำเร็จ </span>
      });

    }
  };

  const onFinish2 = async (values: StockInterface) => {

    // Convert CategoriesID to ID if it's a name
    const categoryId = typeof values.CategoriesID === 'string'
      ? Categories.find(c => c.NameCategories === values.CategoriesID)?.ID || Number(values.CategoriesID)
      : values.CategoriesID;

    // Convert StockStatusID to ID if it's a name
    const stockStatusId = typeof values.StockStatusID === 'string'
      ? Status.find(s => s.NameStockStatus === values.StockStatusID)?.ID || Number(values.StockStatusID)
      : values.StockStatusID;

    const updatedValues = {
      ...values,
      ID: productID,
      ProductImg: fileList2[0]?.thumbUrl || modalProductImg,
      AdminID: admin?.ID,
      CategoriesID: categoryId,
      StockStatusID: stockStatusId,
    };

    // console.log(categoryId)
    // console.log(stockStatusId);
    // console.log(updatedValues);
    // values.ID = Product?.ID;
    let res = await UpdateStock(updatedValues);
    console.log(res)
    if (res.status) {
      messageApi.open({
        type: "success",
        content: <span style={{ color: 'green' }}>
          แก้ไขข้อมูลสำเร็จ
        </span>,
      });
      setTimeout(() => window.location.reload(), 800);
    } else {
      messageApi.open({
        type: "error",
        content: <span style={{ color: 'red' }}>
          แก้ไขข้อมูลไม่สำเร็จ
        </span>,
      });

    }
  };
  const handleDelete = (record: StockInterface) => {
    DeleteStock(record.ID);
    setTimeout(() => window.location.reload(), 800);
    console.log(`Deleting item with ID: ${record.ID}`);
  };






  const showModal = () => {
    setIsModalOpen(true);

  };

  const handleOk = () => {
    setIsModalOpen(false);
    onFinish2(form.getFieldsValue());
  };



  const handleCancel = () => {
    setIsModalOpen(false);

  };


  const [form] = Form.useForm();
  const handleEdit = (record: StockInterface) => {
    // Implement your edit logic here
    console.log(`Editing item with ID: ${record.ID}`);
    setModalProductImg(record.ProductImg); // เซ็ตค่า ProductImage ใน State
    setProductID(record.ID)
    showModal();
  };


  const getUserById = async () => {
    let res = await GetStockByID(productID);
    if (res) {
      setProduct(res);
      //   set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
      form.setFieldsValue({
        NameStock: res.NameStock,
        Price: res.Price,
        AmountStock: res.AmountStock,
        CategoriesID: res.Categories.NameCategories,
        StockStatusID: res.StockStatus.NameStockStatus,
        ProductImg: modalProductImg
      });

    }
  };

  const checkPrice = (rule: any, value: any, callback: any) => {
    if (value < 0) {
      callback('Price must be greater than 0');
    }
    else {
      callback()
    }
  };

  const checkQuantity = (rule: any, value: any, callback: any) => {
    if (value < 0) {
      callback('Quantity must be greater than 0');
    }
    else {
      callback()
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Upload: {
            actionsColor: 'red'
          },
          Button: {
            dangerShadow: '',
            textHoverBg: 'red',



          },
        },
        token: {
          colorText: "black",
          colorPrimary: "#FF6B35",
        },
      }}>
      {contextHolder}
      <Layout>
        <NavbarAdmin />
        <Layout>

          <HeadStock />
          <Content className='content2-bg'>
            <div className='bg-form'>
              <h1 style={{ paddingLeft: '70px', paddingTop: '20px' }}>Add Product </h1>
              <Form
                labelCol={{ span: 25 }}
                wrapperCol={{ span: 20 }}
                layout="vertical"
                style={{ maxWidth: 800, paddingLeft: '150px', paddingTop: '50px', fontWeight: 'bold' }}
                onFinish={onFinish}

              >
                <Form.Item style={{ display: 'inline-block' }} labelCol={{ span: 25 }} wrapperCol={{ span: 40 }}>
                  <Form.Item name="NameStock" label="Product" style={{ width: '230px' }}
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Name is required",
                  //   },
                  //   {
                  //     pattern: /^[^\d]+$/,
                  //     message: "Name should not contain numbers",
                  //   },
                  // ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="Price" label="Price" labelCol={{ span: 25 }} rules={[
                    // { required: true, message: 'Please enter the price' },
                    // { validator: checkPrice,  }
                  ]}  >
                    <InputNumber />
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ display: 'inline-block' }} wrapperCol={{ span: 40 }} >
                  <Form.Item name="AmountStock" label="Quantity" style={{ position: 'absolute', paddingLeft: '100px', width: '500px' }} rules={[
                    // { required: true, message: 'Please enter the amount' },
                    // { validator: checkQuantity,  }
                  ]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name="CategoriesID" label="Type" style={{ width: '250px', paddingTop: '85px', paddingLeft: '100px' }}
                    rules={[
                      // {
                      //   required: true,
                      //   message: "Type is required",
                      // },
                    ]} >
                    <Select allowClear>
                      {Categories.map(c => (
                        <Select.Option key={c.ID}>{c.NameCategories}</Select.Option>
                      ))}
                    </Select>

                  </Form.Item>

                  <Form.Item name="StockStatusID" label="Status" style={{ width: '150px', transform: 'translateX(-154%)' }}
                    rules={[
                      // {
                      //   required: true,
                      //   message: "Status is required",
                      // },
                    ]}>
                    <Select allowClear>
                      {Status.map(s => (
                        <Select.Option key={s.ID}> {s.NameStockStatus}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item name="ProductImg" style={{ display: 'inline-block', paddingLeft: '100px', paddingTop: '20px' }}
                >
                  <div className='bg-upload'>
                    <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                  </div>
                </Form.Item>
                <Button type="primary" htmlType="submit" className='text-button' style={{ width:'120px',
                  borderRadius: '10px',
                  position: 'absolute', marginLeft: '130px', marginTop: '220px'
                }}>
                  Create Stock
                </Button>
              </Form>

            </div>
          </Content>
          <Content>
            <div className='bg-table'>
              <h1 style={{ paddingLeft: '70px', paddingTop: '50px' }}> Product </h1>



              <Table dataSource={Stock} style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: "50px" }}>

                <Column title="ID" dataIndex="ID" key="ID"
                  sorter={(a: StockInterface, b: StockInterface) => (a.ID && b.ID) ? a.ID - b.ID : 0}
                  showSorterTooltip={false} />
                <Column
                  title="Image"
                  dataIndex="ProductImg"
                  key="ProductImg"
                  render={(ProductImg: string) => <img src={ProductImg} alt="Product" style={{ width: '50px' }} />}
                />
                <Column title="Product" dataIndex="NameStock" key="NameStock" />
                <Column title="Quantity" dataIndex="AmountStock" key="AmountStock"
                  sorter={(a: StockInterface, b: StockInterface) => (a.AmountStock !== undefined && b.AmountStock !== undefined) ? a.AmountStock - b.AmountStock : 0}
                  showSorterTooltip={false} />
                <Column title="Price" dataIndex="Price" key="Price"
                  sorter={(a: StockInterface, b: StockInterface) => (a.Price !== undefined && b.Price !== undefined) ? a.Price - b.Price : 0}
                  showSorterTooltip={false} />
                <Column title="Type" dataIndex="CategoriesID" key="CategoriesID" render={(CategoriesID: number) => {
                  const category = Categories.find(c => c.ID === CategoriesID);
                  return category ? category.NameCategories : '';
                }} filters={Categories.map(category => ({
                  text: category.NameCategories || '', // Ensure text is not undefined
                  value: category.ID as unknown as string, // Ensure value is of correct type
                }))}
                  onFilter={(value, record) => (record as StockInterface).CategoriesID === Number(value)}
                />
                <Column title="Status" dataIndex="StockStatusID" key="StockStatusID" render={(StockStatusID: number | string) => {
                  const status = Status.find(s => s.ID === StockStatusID);
                  const tagName = status ? status.NameStockStatus : '';
                  let color;
                  if (tagName === 'Active') {
                    color = 'green';
                  }
                  return (
                    <Tag color={color} key={StockStatusID}>
                      {tagName}
                    </Tag>
                  );
                }}
                  filters={Status.map(status => ({
                    text: status.NameStockStatus || '', // Ensure text is not undefined
                    value: status.ID as unknown as string, // Ensure value is of correct type
                  }))}
                  onFilter={(value, record) => (record as StockInterface).StockStatusID === Number(value)}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text: any, record: StockInterface) => (
                    <Space size="middle">
                      <Button onClick={() => handleEdit(record)} shape='circle' icon={<EditOutlined />}></Button>
                      <Popconfirm
                        title="Delete Product"
                        description="Are you sure to delete this product?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={() => handleDelete(record)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button type='text' danger shape='circle' icon={<DeleteOutlined />}></Button>
                      </Popconfirm>


                    </Space>
                  )}
                />
              </Table>
              <Modal title="Edit Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000} okText="Update"
                cancelText="Cancel" >

                <div className='bg-form-model'>
                  <Form
                    labelCol={{ span: 25 }}
                    wrapperCol={{ span: 20 }}
                    layout="vertical"
                    form={form}
                    style={{ maxWidth: 800, paddingLeft: '70px', paddingTop: '50px', fontWeight: 'bold' }}
                    onFinish={onFinish2}

                  >
                    <Form.Item style={{ display: 'inline-block' }} labelCol={{ span: 25 }}>
                      <Form.Item name="NameStock" label="Product" wrapperCol={{ span: 20 }}>
                        <Input />
                      </Form.Item>
                      <Form.Item name="Price" label="Price" labelCol={{ span: 25 }}>
                        <InputNumber />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item style={{ display: 'inline-block' }} >
                      <Form.Item name="AmountStock" label="Quantity" style={{ position: 'absolute' }}>
                        <InputNumber />
                      </Form.Item>
                      <Form.Item name="CategoriesID" label="Type" style={{ width: '150px', paddingTop: '85px' }}>
                        <Select allowClear>
                          {Categories.map(c => (
                            <Select.Option key={c.ID}>{c.NameCategories}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item name="StockStatusID" label="Status" style={{ width: '150px', transform: 'translateX(-122%)' }}>
                        <Select allowClear>
                          {Status.map(s => (
                            <Select.Option key={s.ID}> {s.NameStockStatus}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Form.Item>
                    <Form.Item name="ProductImg" style={{ display: 'inline-block', paddingLeft: '80px', paddingTop: '20px' }}>
                      <div className='bg-upload'>
                        <Upload

                          listType="picture-card"
                          fileList={fileList2}
                          onChange={handleChange2}
                        >
                          {fileList2.length >= 1 ? null : uploadButton2}
                        </Upload>
                      </div>
                    </Form.Item>
                    {/* <Button type="primary" htmlType="submit" className='text-button' style={{
                  borderRadius: '20px', backgroundColor: '#FF6B35',
                  position: 'absolute', marginLeft: '200px', marginTop: '200px'
                }}>
                  Create Series
                </Button> */}
                  </Form>
                </div>

              </Modal>

            </div>
          </Content>


        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <FloatButton.BackTop />
    </ConfigProvider>
  )
}


export default Stock;
