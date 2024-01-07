import Cookies from 'js-cookie';
import { message, Table, Space, Button } from 'antd';
import { SwapOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react';
// CSS
import "./updateDeliveryCSS.css";
// interface
import { AddressInterface } from '../../Interface/Iaddress';
import { OrderInterface } from '../../Interface/Iorder';
// service
import { UpdateAddressIDAtOrder, YourHandlerFunction } from '../../services/https/paymentHTTPS';
import { GetAddressByMemberID } from '../../services/https/paymentHTTPS';


const { Column } = Table;

export default function UpdateDelivery() {
    const [messageApi, contextHolder] = message.useMessage();


    const [DataAddress, setDataAddress] = useState<AddressInterface[]>([]);
    const [DataAddressAll, setDataAddressAll] = useState<AddressInterface[]>([]);

    const getAdressedID = async () => {
        // Show Address ปัจจุบันที่อยู่ใน order
        let res = await YourHandlerFunction(1);
        if (res) {
            setDataAddress(res);
        }
    };

    const getDataAddressAll = async () => {
        // 
        let res = await GetAddressByMemberID(1)
        if (res) {
            setDataAddressAll(res);
        }
    }

    

    useEffect(() => {
        getAdressedID();
        getDataAddressAll();
    }, []);

    const handleEdit = async (values: AddressInterface) => {
        let id = values.ID;
        let updatedValues: OrderInterface = {
            ID: 1,
            AddressID: id
        }
        let res = await UpdateAddressIDAtOrder(updatedValues);
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
    }

    return (
        <>
            {contextHolder}
            <div className="container-delivery">
                <div className="content-delivery">
                    <div className="site-content-delivery">
                        <div className='textShow'>{Object(DataAddress).HouseNo}</div>
                        <p >House No</p>
                        <div className="textShow">{Object(DataAddress).Moo}</div>
                        <p>Moo</p>
                        <div className="textShow">{Object(DataAddress).Province}</div>
                        <p>Province</p>
                        <div className="textShow">{Object(DataAddress).District}</div>
                        <p>District</p>
                        <div className="textShow">{Object(DataAddress).Sub_district}</div>
                        <p>Sub District</p>
                        <div className="textShow">{Object(DataAddress).Postal_code}</div>
                        <p>Postal code</p>
                    </div>
                </div>
            </div>

            <div className='container-select-delivery'>
                <table border={1} cellPadding={10} cellSpacing={0} >
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>House No</th>
                            <th>Moo</th>
                            <th>Province</th>
                            <th>District</th>
                            <th>Sub District</th>
                            <th>Postal code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataAddressAll.map((data, index) => (
                            <tr key={index}>
                                {/* <td>{data.ID}</td> */}
                                <td>{data.HouseNo}</td>
                                <td>{data.Moo}</td>
                                <td>{data.Province}</td>
                                <td>{data.District}</td>
                                <td>{data.Sub_district}</td>
                                <td>{data.Postal_code}</td>
                                <td>
                                    <button onClick={() => handleEdit(data)}>Change</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <div className='container-select-delivery' style={{border: "1px solid black"}}>
                <Table dataSource={DataAddressAll} style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: "50px" }}>
                    <Column title="ID" dataIndex="ID" key="ID" showSorterTooltip={false}/>
                    <Column title="House No" dataIndex="HouseNo" key="HouseNo" showSorterTooltip={false}/>
                    <Column title="Moo" dataIndex="Moo" key="Moo" showSorterTooltip={false}/>
                    <Column title="Province" dataIndex="Province" key="Province" showSorterTooltip={false} />
                    <Column title="District" dataIndex="District" key="District" showSorterTooltip={false} />
                    <Column title="Sub District" dataIndex="Sub_district" key="Sub_district" showSorterTooltip={false}/>
                    <Column title="Postal code" dataIndex="Postal_code" key="Postal_code" showSorterTooltip={false}/>
                    <Column title="Action" key="action"
                        render={(text: any, record: OrderInterface) => (
                            <Space size="middle">
                                <Button onClick={() => handleEdit(record)}  shape='round' icon={<SwapOutlined />}></Button>
                            </Space>
                        )}/>
                </Table>
            </div> */}
        </>
    );
}