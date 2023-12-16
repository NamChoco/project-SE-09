// react
import { message , Form, } from 'antd';
// import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { useState, useEffect, ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
// component
import HeadPayment from "../../../component/head-page/payment/headPayment";
import Navbar from "../../../component/navbar/navbarMember";
// import Footer from "../../../component/footer/footer";
// img
import QRcode from "./../../../assets/QR-code-payment.jpg"
// Interfaces
import { ImageUpload } from '../../../Interface/Iupload';
import { BankTypeInterface } from "../../../Interface/IBankType";
import { PaymentInterface } from "../../../Interface/Ipayment";
// Create Payment
import { CreatePayment } from '../../../services/https/paymentHTTPS';
// Get FK
import { GetBankType } from "../../../services/https/paymentHTTPS";
// CSS
import "./PaymentCSS.css";

export default function Payment() {

    let navigate = useNavigate();
    const [messageApi , contextHolder] = message.useMessage();
    const [moneySlip , setMoneySlip] = useState("");
    const [inputBankType, setBankType] = useState<BankTypeInterface[]>([]);

    const [input, setInput] = useState({
        MoneySlip: '',
        DateTimePayment: '',
        BankTypeID: 1,
        AdminID: 1,
        PaymentStatusID: 1,
        MemberID: 1,
    })


    const handleInput  = (e: any) => {
        const { name, value } = e.target; // ดึงค่ามาที่ e  e.target=เป้าหมาย
        if (name === "BankTypeID") {
            setInput({
                ...input,[name]: parseInt(value, 10),
                //แปลงเป็นจำนวนเต็ม กำหนดเชขฐาน
            });
        } else {
            setInput({
                ...input, [name]: value,
            });
        }
    }

    const getBankTyped = async () => {
        let res = await GetBankType();
        if (res) {
            setBankType(res);
        }
    };

     // callback function
    useEffect(() => {
        getBankTyped();
    }, []);

    const handleSubmit  = async (values: PaymentInterface) => {
        values.MoneySlip = moneySlip;
        values.DateTimePayment = "DateTime";
        values.BankTypeID = input.BankTypeID;
        values.AdminID = 1;
        values.PaymentStatusID = 1;
        values.MemberID = 1;
        console.log(values); 

        let res = await CreatePayment(values);
            if (res.status) {
                messageApi.open({
                    type: "success",
                    content: "บันทึกข้อมูลสำเร็จ",
                });
                setTimeout(function () {
                    navigate("/payment");
                }, 2000);
            } else {
                messageApi.open({
                    type: "error",
                    content: "บันทึกข้อมูลไม่สำเร็จ",
                });
            }
    }


    const uploadImage = async (e : any) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setMoneySlip(base64);
        // console.log("Base64" + base64)
    };

    const convertBase64 = (file : File) => {
        return new Promise<string>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result as string);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };

    return (
        <>
            {contextHolder}
            <Navbar/>
            <HeadPayment />
            <div className="container-page-payment">
                {/* <div className="container-delivery">
                    <div className="site-delivery">
                        <h2>Address</h2>
                        <form action="">
                            <input type="text" placeholder="HouseNo" />
                            <input type="text" placeholder="Moo" />
                            <input type="text" placeholder="Province" />
                            <input type="text" placeholder="District" />
                            <input type="text" placeholder="Sub_district" />
                            <input type="text" placeholder="Postal_code" />
                            <select placeholder="Address">
                                <option value="someOption">Some option</option>
                                <option value="otherOption">Other option</option>
                            </select>
                        </form>
                    </div>
                </div> */}

                <div className="container-upload">
                    <h1>IMG</h1>
                    <Form action="" onFinish={handleSubmit}>
                        <select name="BankTypeID" value={input.BankTypeID} onChange={handleInput}>
                            {inputBankType.map((item) => (
                                <option value={item.ID} key={item.NameBank}>{item.NameBank}</option>
                            ))}
                        </select>
                        {/* <img src={QRcode} alt="" /> */}
                        <input 
                            type="file" 
                            name='MoneySlip' 
                            onChange={(e) => {
                                uploadImage(e);
                              }}
                        />
                        <img src={moneySlip} alt="" style={{width: "1000px"}} />
                        <input type="submit" value="Submit"/>
                    </Form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
} 