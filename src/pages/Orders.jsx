import React from 'react'
import { useEffect, useState } from 'react';
import "../styles/Orders.css";
import {useNavigate} from "react-router-dom"
// {
//         "_id": "6219c6377032a4ce1d027664",
//         "userID": "62123147d291463517807d3d",
//         "name": "Rishi Gupta",
//         "phone": 8770856060,
//         "products": [
//             {
//                 "_id": "61f149cb5c925a39ebcde2c3",
//                 "productID": 4,
//                 "productName": "product 5",
//                 "stock": 6,
//                 "category": [
//                     "strategy"
//                 ],
//                 "productType": "image",
//                 "price": 2000,
//                 "discountedPrice": 1500,
//                 "image": "1643203019134-881877155final logo.png",
//                 "__v": 0,
//                 "quantity": 1,
//                 "selectedProductColor": null,
//                 "selectedProductSize": null,
//                 "cartItemId": "37551b1b-01e8-4622-bbd9-038f61ffb26d"
//             }
//         ],
//         "address": "pardeshipura indore",
//         "deliverOption": "Pickup",
//         "note": "",
//         "email": "grishi634@gmail.com",
//         "status": "PLACED",
//         "__v": 0
//     }
//  let url="https://infinite-sands-08332.herokuapp.com";
    let url="http://localhost:9000";
export default function Orders({set}) {
    const navigate=useNavigate();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`${url}/getallorders`).then((res)=>res.json()).then(data=>{setOrders(data.reverse());}).catch(err=>{console.log(err)});
    },[]);
  return (
    <div>
        <div>All Orders</div>
        {
         orders.length!==0&&   orders.map((order)=>{
                let totalprice = 0;
                order.products.map((value) => {
                    totalprice += value.discountedPrice * value.quantity;
                })
                return(
                     <div className='orow'>
                        <div className='ocolumn'>
                        <div>Customer Name :{order.name}</div>
                            <div>OrderID: {order._id}</div>
                            <div>Products: {order.products.length}</div>
                        </div>
                        <div className='ocolumn'>
                            
                            <div>Phone: {order.phone}</div>
                          <div>time:{new Date(order.date).getHours()}:{new Date(order.date).getMinutes()} </div>
                            <div>Status: {order.status}</div>
                        </div>
                        <div className='ocolumn'>
                         <div>Email: {order.email}</div>
                          <div>date:{new Date(order.date).getDate()}-{new Date(order.date).getMonth()}-{new Date(order.date).getFullYear()} </div>
                           
                            <div><h4>Total Bill: {totalprice}</h4></div>
                        </div>
                        <div className='ocolumn'>
                            <button onClick={()=>{navigate(`${order._id}`)}}>View more</button>
                        </div>
                    </div>
                )
            })
        }
       
    </div>
  )
}
