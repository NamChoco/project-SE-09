import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd'
import layout, { Content } from 'antd/es/layout/layout'
import './register.css';
import React, { useEffect, useState } from 'react'
import { GetGender, GetOccupation, GetPrefix } from '../../services/https';
import { GenderInterface } from '../../Interface/Igender';
import { PrefixInterface } from '../../Interface/Iprefix';
import { OccupationInterface } from '../../Interface/Ioccupation';


function Register() {


    const [Gender, setGender] = useState<GenderInterface[]>([]);
    const [Prefix, setPrefix] = useState<PrefixInterface[]>([]);
    const [Occupation, setOccupation] = useState<OccupationInterface[]>([]);


    useEffect(() => {
        Get_Gender();
        Get_Prefix();
        Get_Occupation();
    }, []);


    const Get_Gender = async () => {
        let res = await GetGender();
        if (res) {
            console.log(res)
            setGender(res)
        }
    };
    const Get_Prefix = async () => {
        let res = await GetPrefix();
        if (res) {
            console.log(res)
            setPrefix(res)
        }
    };
    const Get_Occupation = async () => {
        let res = await GetOccupation();
        if (res) {
            console.log(res)
            setOccupation(res)
        }
    };
    






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
                <svg width="90" height="90" viewBox="0 0 82 82" fill="none" style={{ transform: 'translateX(-50%) translateY(50%)' }}>
                    <circle cx="41" cy="41" r="36" stroke="#F3D708" stroke-opacity="0.51" stroke-width="10" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="43" viewBox="0 0 65 43" fill="none" style={{ transform: 'translateX(1050%) translateY(-110%)' }}>
                    <circle cx="32.5" cy="10.5" r="27.5" stroke="#F3D708" stroke-width="10" />
                </svg>
                <div className='register-form'>
                    <h1 className='sign-up-text' style={{ paddingTop: '30px' }}>Sign Up</h1>
                    <Form
                        {...layout}

                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 1000, paddingTop: '50px', paddingLeft: '50px' }}
                        validateMessages={validateMessages}

                    >

                        <Form.Item style={{ display: 'inline-flex' }} >
                            <Select placeholder="Mr." style={{ width: '70px' }}>
                            {Prefix.map(p => (
                                <Select.Option key={p.ID} >{p.NamePrefix}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item >
                        <Form.Item name='first_name' rules={[{ required: true }]} style={{ display: 'inline-flex', paddingLeft: '10px' }}>
                            <Input placeholder="FirstName" style={{ width: '160px' }} />
                        </Form.Item>
                        <Form.Item name='last_name' rules={[{ required: true }]} style={{ display: 'inline-flex', paddingLeft: '10px' }}>
                            <Input placeholder="LastName" style={{ width: '160px' }} />
                        </Form.Item>

                        <Form.Item name= 'email' rules={[{ type: 'email' }]} style={{ display: 'inline-flex' }}>
                            <Input placeholder="Email" style={{ width: '250px' }} />
                        </Form.Item>
                        
                        <Form.Item name='gender_id' style={{ display: 'inline-flex', paddingLeft: '10px' }}  >
                            <Select placeholder="Gender" style={{ width: '150px' }}
                            >
                            {Gender.map(g => (
                                <Select.Option key={g.ID} >{g.NameGender}</Select.Option>
                                ))}
                            </Select>
                       
                        </Form.Item >
                        <Form.Item name= 'username' rules={[{ required: true }]} style={{ display: 'inline-flex' }}>
                            <Input placeholder="Username" style={{ width: '200px' }} />
                        </Form.Item>
                        <Form.Item name='password'rules={[{ required: true }]} style={{ display: 'inline-flex', paddingLeft: '10px' }}>
                            <Input placeholder="Password" style={{ width: '200px' }} />
                        </Form.Item>
                        <Form.Item style={{ display: 'inline-flex' }}  >
                            <Select placeholder="Occupation" style={{ width: '150px' }}>
                                {Occupation.map(o => (
                                <Select.Option key={o.ID}>{o.NameOccupation}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item >
                        <Form.Item style={{ display: 'inline-flex', paddingLeft: '10px' }}  >
                            <DatePicker placeholder="BirthDay" style={{ width: '250px' }} />
                        </Form.Item >
                        <Form.Item name='phone' rules={[{ required: true }]} style={{ display: 'inline-flex' }}>
                            <Input placeholder="Phone Number" style={{ width: '410px' }} />
                        </Form.Item>

                        <div >
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ maxWidth: '100px', paddingTop: '50px' }} >

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


