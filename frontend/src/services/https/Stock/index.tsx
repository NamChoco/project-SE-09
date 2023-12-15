import { StockInterface } from "../../../Interface/Istock";


const apiUrl = "http://localhost:8080";

async function CreateStock(data: StockInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    let res = await fetch(`${apiUrl}/stock`, requestOptions)
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

async function GetStockStatus() {
    const requestOptions = {
      medthod: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(`${apiUrl}/status`, requestOptions)
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
    GetStockStatus,
    CreateStock
  };