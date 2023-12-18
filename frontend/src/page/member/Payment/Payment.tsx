// react
import { message , Form, } from 'antd';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// component
import HeadPayment from "../../../component/head-page/payment/headPayment";
// img
import QRcode from "./../../../assets/QR-code-payment.jpg"
import Sibe from "./../../../assets/dog/sibe-rm-bg.png";
// Interfaces
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

    /// Upload Image
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

    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.inputfile');

    Array.prototype.forEach.call(inputs, function(input: HTMLInputElement) {
        const label: HTMLElement = input.nextElementSibling as HTMLElement;
        const labelVal: string = label.innerHTML;

        input.addEventListener('change', function(e: Event) {
            let fileName: string = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length.toString());
            } else {
                fileName = (e.target as HTMLInputElement).value.split('\\').pop() as string;
            }

            const spanElement = label.querySelector('span');
            if (spanElement) {
                spanElement.innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });
    });

    return (
        <>
            {contextHolder}
            <HeadPayment />
            <div className="spacewhite"></div>
            <div className="container-page-payment">
                <div className="container-content-payment">
                    <div className="container-img">
                        <img className='absolute-middle' style={{width: "1000px"}} src={Sibe} alt="" />
                    </div>

                    <div className="container-upload">
                        <div className='site-upload'>
                            <div className="QRCode">
                                <img src={QRcode} alt="" />
                            </div>
                            <div className='box-payment'>
                                <Form action="" onFinish={handleSubmit}>
                                    <div className="Banktype">
                                        <select className='select-banktype classic' name="BankTypeID" value={input.BankTypeID} onChange={handleInput}>
                                            {inputBankType.map((item) => (
                                                <option value={item.ID} key={item.NameBank}>{item.NameBank}</option>))}
                                        </select>
                                    </div>
                                    <input 
                                        className='inputfile' 
                                        type="file" 
                                        name='MoneySlip' 
                                        onChange={(e) => {uploadImage(e);}}
                                        id="file"
                                        data-multiple-caption="{count} files selected" multiple/>
                                    <label htmlFor='file'>Choose a file</label>
                                    <input type="submit" className='button-28' role='button' value="Pay Now" />
                                </Form>
                                <div className='verify-payment'>
                                    <img src={moneySlip} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacewhite"></div>
        </>
    );
} 