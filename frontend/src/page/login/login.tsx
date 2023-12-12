import { Button, Form, Input, message } from 'antd'
import { Content } from 'antd/es/layout/layout'
import './login.css';
import React from 'react'
import { MemberInterface } from '../../Interface/Imember';
import { LoginByUsername } from '../../services/https';
import Cookies from 'js-cookie'; //npm install js-cookie
import { useNavigate } from 'react-router-dom';






function Login() {

  const [messageApi, contextHolder] = message.useMessage();


  const navigate = useNavigate();
  

  const onFinish = async (values: MemberInterface) => {
    let res = await LoginByUsername(values);
    console.log(values)
    console.log(res)
    
    if (res.status) {
      const usernameValues = values.username as string;
      Cookies.set('username',usernameValues,{ expires: 7 }); //setCookie(name, value, {วันหมดอายุ})
      const username = Cookies.get('username');
      console.log('Cookies : '+username)
      messageApi.open({
        type: "success",
        content: <span style={{ color: 'green' }}>
        เข้าสู่ระบบสำเร็จ
      </span>,
      });

      setTimeout(function () {
        navigate('/');
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: <span style={{ color: 'red' }}>
          ข้อมูลไม่ถูกต้อง
          </span>,
      });
    }
  };

  return (
    <>
      <Content>
        <svg width="90" height="90" viewBox="0 0 82 82" fill="none" style={{ transform: 'translateX(-50%) translateY(50%)' }}>
          <circle cx="41" cy="41" r="36" stroke="#F3D708" stroke-opacity="0.51" stroke-width="10" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="43" viewBox="0 0 65 43" fill="none" style={{ transform: 'translateX(1050%) translateY(-110%)' }}>
          <circle cx="32.5" cy="10.5" r="27.5" stroke="#F3D708" stroke-width="10" />
        </svg>
        <div className='login-form'>
          <h1 className='login-text' style={{ paddingTop: '30px' }}>Login Now</h1>
          <Form
            name="basic"
            wrapperCol={{ span: 21 }}
            style={{ maxWidth: 1000, paddingTop: '50px', paddingLeft: '50px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" style={{height:'50px',borderRadius:'10px',fontSize:'17px'}} />
            </Form.Item>

            <Form.Item
              
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" style={{height:'50px',borderRadius:'10px',fontSize:'17px'}} />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ maxWidth: '20px', paddingTop: '50px' }}>
            {contextHolder}
              <Button type="primary" htmlType="submit" className='button-login'>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </>
  )
}

export default Login