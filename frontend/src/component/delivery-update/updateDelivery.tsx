
import { message , Form, } from 'antd';
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
// CSS
import "./updateDeliveryCSS.css";
// interface
import { OrderInterface } from '../../Interface/Iorder';

import { GetOrderByMemberID } from '../../services/https/paymentHTTPS';
import { UpdateOrder } from '../../services/https/paymentHTTPS';

export default function UpdateDelivery() {
    
    // let navigate = useNavigate();

    const [value, setValue] = useState({
        AddressesID: "",
    });
    const [order, setOrder] = useState<OrderInterface[]>([]);
    const [messageApi , contextHolder] = message.useMessage();

    const onChange = (e: any) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (values: OrderInterface) => {

        values.ID = Number(Object(order).ID);
        values.AddressesID = value.AddressesID === "" ? Object(order).AddressesID : value.AddressesID;

        let res = await UpdateOrder(values);
        if (res.status) {
          messageApi.open({
            type: "success",
            content: "แก้ไขข้อมูลสำเร็จ",
          });
        } else {
          messageApi.open({
            type: "error",
            content: "แก้ไขข้อมูลไม่สำเร็จ",
          });
        }
    };

    const getOrdered = async () => {
        let res = await GetOrderByMemberID("member");
        if (res) {
            setOrder(res);
        }
      };
    
      useEffect(() => {
        getOrdered();
      }, []);



    return (
        <>
            {contextHolder}
            <div className="container-delivery">
                <div className="content-delivery">
                    <div className="site-content-delivery">
                        <Form onFinish={handleSubmit}>
                            <div>
                                <input type="text" onChange={onChange} placeholder={String(Object(order).Abbot)} />
                                <label htmlFor="">House No</label>
                            </div>
                            <div>
                                <input type="text" onChange={onChange} />
                                <label htmlFor="">Moo</label>
                            </div>
                            <div>
                                <input type="text" onChange={onChange} />
                                <label htmlFor="">Province</label>
                            </div>
                            <div>
                                <input type="text" onChange={onChange} />
                                <label htmlFor="">District</label>
                            </div>
                            <div>
                                <input type="text" onChange={onChange} />
                                <label htmlFor="">Sub District</label>
                            </div>
                            <div>
                                <input type="text" onChange={onChange} />
                                <label htmlFor="">Sub District</label>
                            </div>
                            <input type="submit" value="Change" />
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}