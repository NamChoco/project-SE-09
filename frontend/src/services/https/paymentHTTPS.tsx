import { OrderInterface } from "../../Interface/Iorder";
import { PaymentInterface } from "../../Interface/Ipayment";

const apiUrl = "http://localhost:8080";

// Create
async function CreatePayment(data: PaymentInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/payment`,requestOptions)
      .then((response) => response.json())
      .then((res)=>{
        if(res.data){
          return { status: true, message: res.data };
        } else{
          return { status: false, message: res.error };
        }
      });
    return res;
}

// Get
async function GetBankType() {
    const requestOptions = {
      medthod: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(`${apiUrl}/banktype`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
  
        } else {
          return false;
        }
  
      });
    return res;
}

async function UpdateOrder(data: OrderInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/order`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function GetOrderByMemberID(username: String | undefined) {
  const requestOptions = {
    method: "GET",
  };

  let res = await fetch(`${apiUrl}/oderMember/${username}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export {
    CreatePayment,
    GetBankType,
    UpdateOrder,
    GetOrderByMemberID,
};