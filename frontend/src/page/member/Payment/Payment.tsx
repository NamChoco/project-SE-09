// react
import { useState, useEffect } from "react";
// component
import HeadPayment from "../../../component/head-page/payment/headPayment";
import Navbar from "../../../component/navbar/navbarMember";
import Footer from "../../../component/footer/footer";
// img
import QRcode from "./../../../assets/QR-code-payment.jpg"
// Interfaces
// import { PaymentInterface } from "../../../Interface/Ipayment";
import { BankTypeInterface } from "../../../Interface/IBankType";
// Get FK
import { GetBankType } from "../../../services/https";
// CSS
import "./PaymentCSS.css";


export default function Payment() {


    const [inputBankType, setBankType] = useState<BankTypeInterface[]>([]);

    const [input, setInput] = useState({
        MoneySlip: '', 
        BankTypeID: '1',
        AdminID: '1',
        PaymentStatusID: '1',
        MemberID: '1',
    })


    const handleInput  = (e: any) => {
        const { name, value } = e.target; // ดึงค่ามาที่ e  e.target=เป้าหมาย
        if (name === "BankTypeID" || name === "GenderID") {
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

    // const getGender = async () => {
    //     let res = await GetGender();
    //     if (res) {
    //         setGender(res);
    //     }
    // };

     // callback function
    useEffect(() => {
        getBankTyped();
        // getGender()
    }, []);

    return (
        <>
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
                    <form action="">
                        <select name="BankTypeID" value={input.BankTypeID} onChange={handleInput}>
                            {inputBankType.map((item) => (
                                <option value={item.NameBank} key={item.ID}>{item.NameBank}</option>
                            ))}
                        </select>
                        {/* <img src={QRcode} alt="" /> */}
                        <input type="file" />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}