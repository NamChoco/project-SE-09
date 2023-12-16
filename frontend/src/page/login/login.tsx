import { Button, Form, Input, message } from 'antd'
import { Content } from 'antd/es/layout/layout'
import './login.css';
import React, { useState } from 'react'
import { MemberInterface } from '../../Interface/Imember';
import { LoginAdminByUsername, LoginByUsername } from '../../services/https';
import Cookies from 'js-cookie'; //npm install js-cookie
import { useNavigate } from 'react-router-dom';






function Login() {

  const [messageApi, contextHolder] = message.useMessage();


  const navigate = useNavigate();
  const register = () => navigate("/")
  



  const [input, setInput] = useState({
    Username: "",
    Password: "",
  });

  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };


  const onFinish = async () => {
    let member = await LoginByUsername(input.Username);
    let admin = await LoginAdminByUsername(input.Username);
    console.log(input.Username);
    console.log(input.Username[0]);
    console.log(member);

    if (
      input.Username[0] === member.Username &&
      input.Password[0] === member.Password
    ) {
      const usernameValues = input.Username as string;

      Cookies.set("usernameMember", usernameValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})

      let c = Cookies.get("usernameMember");
      console.log(c);
      messageApi.open({
        type: "success",
        content: "Login Member Success",
      });

      setTimeout(function () {
        navigate("/member/main");
      }, 2000);
    } else if (
      input.Username[0] === admin.Username &&
      input.Password[0] === admin.Password
    ) {
      const usernameValues = input.Username as string;

      Cookies.set("usernameAdmin", usernameValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})

      messageApi.open({
        type: "success",
        content: "Login Admin Success",
      });

      setTimeout(function () {
        navigate("/admin/main"); 
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "อ้ายว่ามันบ่ใช่",
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
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input name="Username" placeholder="Username" style={{height:'50px',borderRadius:'10px',fontSize:'17px'}} onChange={handleInput} />
            </Form.Item>

            <Form.Item
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password name="Password" placeholder="Password" style={{height:'50px',borderRadius:'10px',fontSize:'17px'}} onChange={handleInput}/>
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ maxWidth: '20px', paddingTop: '50px' }}>
            {contextHolder}
              <Button type="primary" htmlType="submit" className='button-login'>
                Login
              </Button>
            </Form.Item>
          </Form>
          <p className='change-to-login-text'>Not a member?  <span className='click-login-text' onClick={register}>Signup now</span></p>
        </div>
      </Content>
    </>
  )
}

export default Login