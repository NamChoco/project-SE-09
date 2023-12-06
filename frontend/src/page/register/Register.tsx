import { Button, Form, Input, InputNumber, Select } from 'antd'
import layout, { Content } from 'antd/es/layout/layout'
import './register.css';
import React from 'react'


function Register() {


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <>
            <Content >
            <svg width="82" height="82" viewBox="0 0 82 82" fill="none" style={{transform:'translateX(-50%) translateY(50%)'}}>
                <circle cx="41" cy="41" r="36" stroke="#F3D708" stroke-opacity="0.51" stroke-width="10"/></svg>
                <div className='register-form'>
                    <h1 className='sign-up-text' style={{ paddingTop: '30px' }}>Sign Up</h1>
                    <Form
                        {...layout}
    
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 1000, paddingTop: '50px' ,paddingLeft:'50px'}}
                        validateMessages={validateMessages}

                    >
                         
                        <Form.Item style={{ display: 'inline-flex' }}  >
                            <Select placeholder="Mr." style={{width:'70px'}}>
                                <Select.Option value="demo">Mr.</Select.Option>
                            </Select>
                        </Form.Item >
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]} style={{ display: 'inline-flex',paddingLeft:'10px' }}>
                            <Input placeholder="FirstName" style={{width:'160px'}}/>
                        </Form.Item>
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]} style={{ display: 'inline-flex',paddingLeft:'10px'  }}>
                            <Input placeholder="LastName" style={{width:'160px'}}/>
                        </Form.Item>
                        
                        <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]} style={{ display: 'inline-flex' }}>
                            <Input placeholder="Email" style={{width:'250px'}}/>
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-flex' ,paddingLeft:'10px'}}  >
                            <Select placeholder="Gender" style={{width:'150px'}}>
                                <Select.Option value="Male">Male</Select.Option>
                            </Select>
                        </Form.Item >
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]} style={{ display: 'inline-flex' }}>
                            <Input placeholder="Username" style={{width:'200px'}}/>
                        </Form.Item>
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]} style={{ display: 'inline-flex',paddingLeft:'10px'  }}>
                            <Input placeholder="Password" style={{width:'200px'}}/>
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-flex' }}  >
                            <Select placeholder="Occupation" style={{width:'150px'}}>
                                <Select.Option value="Male">Male</Select.Option>
                            </Select>
                        </Form.Item >
                        <Form.Item name={['user', 'name']}  rules={[{ required: true }]} style={{ display: 'inline-flex',paddingLeft:'10px' }}>
                            <Input placeholder="Phone Number" style={{width:'250px'}}/>
                        </Form.Item>
                        
                        <div >
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{maxWidth:'100px',paddingTop:'50px'}} >
                            
                            <Button type="primary" htmlType="submit" className='button-submit' >
                                Sign Up
                            </Button>
                            
                        </Form.Item>
                        </div>
                    </Form>
                </div>
                
            </Content>
        </>
    )
}

export default Register