import { Button, ConfigProvider, Divider, Rate, Tabs, TabsProps } from "antd";
import { Layout } from "antd";

import NavbarMember from "../../../component/navbar/navbarMember";
import HeadMyPurchase from "../../../component/head-page/myPurchase/headMyPurchase";

import './MyPurchase.css'
import Cookies from "js-cookie";
import { MemberInterface } from "../../../Interface/Imember";
import { useEffect, useState } from "react";
import { LoginByUsername } from "../../../services/https";
import { PaymentInterface } from "../../../Interface/Ipayment";
import { GetAmountByID, GetProductByID } from "../../../services/https/MyPurchase";
import { StockInterface } from "../../../Interface/Istock";
import { OrderListInterface } from "../../../Interface/Iorderlist";


const { Header, Content, Footer } = Layout;



const onChange = (key: string) => {
    console.log(key);
};


interface Product {
    ID?: number;
    ProductImg?: string;
    NameStock?: string;
    Price?: number | undefined;
    Amount?: any;
}


export default function MyPurchase() {
    const [memberID, setMemberID] = useState<Number | undefined>();
    const [product, setProduct] = useState<Product[]>([]);




    useEffect(() => {
        GetUsers_ByUsername();

    }, []);

    useEffect(() => {
        GetProduct_ByID();
    }, [memberID]);

    const username = Cookies.get("usernameMember");
    console.log(username)
    const GetUsers_ByUsername = async () => {
        let res = await LoginByUsername(username);
        console.log(res)
        if (res) {
            setMemberID(res.ID);
        }
    };
    console.log(memberID)
    const GetProduct_ByID = async () => {
        const res: StockInterface[] = await GetProductByID(memberID);
        const re: OrderListInterface[] = await GetAmountByID(memberID)
        console.log(re)
        
        const products: Product[] = res.map(product => {
            const correspondingAmount = re.find(amount => amount.StockID === product.ID);
          
            return {
              ID: product.ID || 0, // Providing a default value of 0 if ID is undefined
              ProductImg: product.ProductImg || '', // Providing a default value of an empty string if ProductImg is undefined
              NameStock: product.NameStock || '', // Providing a default value of an empty string if NameStock is undefined
              Price: product.Price || 0, // Providing a default value of 0 if Price is undefined
              Amount: correspondingAmount ? correspondingAmount.AmountList || 0 : 0, // Providing a default value of 0 if Amount is undefined
            };
          });
          console.log(products)
          setProduct(products)
    };
    console.log(product)






    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'All',
            children: (<>
                {product.map(p => (

                    <div className="bg-all-order">

                        <div className="imgEP">
                            <img className="imgForEP" src={p.ProductImg} />
                        </div>
                        <div className="toonnameAndDate">

                            <p className="name-product">{p.NameStock}</p>
                            <div style={{ paddingTop: '20px' }}>
                                <span className="Price-product"> ฿{p.Price} </span> 
                                <p className="Amount-product">x {p.Amount} </p>
                            </div>
                            <Divider className="divider-product" />
                            <p className="Total-price-txt">Order Total: 
                                <span style={{ paddingLeft: "30px", color: "#FF6B35", fontSize: "120%" }}> {p.Amount && p.Price !== undefined ? p.Amount * p.Price : 'N/A'} </span> 
                            </p>
                            <Button className="btn-product-rate">Rate</Button>
                            <Rate count={5} value={2}/>
                        </div>
                    </div >

                ))}
            </>
            ),
        },
        {
            key: '2',
            label: 'Completed',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: <NavbarMember />,
        },
    ];











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

            <Layout>
                <NavbarMember />
                <Layout>
                    <HeadMyPurchase />
                    <Content>
                        <div >
                            <Tabs className="bg-tab" items={items} onChange={onChange} centered tabPosition="top" tabBarGutter={100} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>

    );
}