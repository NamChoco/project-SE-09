import { MemberInterface } from "../../Interface/Imember";
import { StockInterface } from "../../Interface/Istock";



const apiUrl = "http://localhost:8080";

// async function CreateStock(data: StockInterface) {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };

//     let res = await fetch(`${apiUrl}/users`, requestOptions)
//       .then((response) => response.json())
//       .then((res) => {
//         if (res.data) {
//           return { status: true, message: res.data };
//         } else {
//           return { status: false, message: res.error };
//         }
//       });

//     return res;
//   }

async function GetGender() {
  const requestOptions = {
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/gender`, requestOptions)
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

async function GetPrefix() {
  const requestOptions = {
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/prefix`, requestOptions)
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

async function GetOccupation() {
  const requestOptions = {
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/occupation`, requestOptions)
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

async function CreateMember(data: MemberInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/members`, requestOptions)
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

async function LoginByUsername(data: MemberInterface) {
  const requestOptions ={
   
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/login`,requestOptions)
  .then((response) => response.json())
  .then((res)=>{
    if(res.data){
      return { status: true, message: res.data };

    }
    else{
      return { status: false, message: res.error };
    }
  });
  return res;
}

export {
  LoginByUsername,
  GetOccupation,
  GetGender,
  GetPrefix,
  CreateMember
};