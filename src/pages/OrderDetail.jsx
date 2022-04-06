import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import "../styles/orderDetails.css"
 let url="https://infinite-sands-08332.herokuapp.com";
    // let url="http://localhost:9000";
export default function OrderDetail() {
       const [orders,setOrders]=useState([]);
       const [edit,setedit]=useState(false);
       const [status,setstatus]=useState("PLACED");
       useEffect(()=>{
         fetch(`${url}/getallorders`).then((res)=>res.json()).then(data=>{setOrders(data.reverse());}).catch(err=>{console.log(err)});
        },[edit]);
        const params=useParams();
        const id=params.orderid;
        const order=orders.filter((d)=>{return d._id==id})[0];
        console.log(order)
        if(orders.length===0) return <div>No Orders</div>
        let totalprice = 0;
        order.products.map((value) => {
          totalprice += value.discountedPrice * value.quantity;
        })
        //  let url="https://infinite-sands-08332.herokuapp.com";
    // let url="http://localhost:9000";
  const saveHandler=()=>{
      fetch(`${url}/updateStatus`,{
          method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({_id:order._id,status})
      }).then(res=>res.json()).then(data=>{console.log(data);setedit(false)}).catch(err=>console.log(err));
  }
  return (
    <div style={{textAlign:'center'}}>
    <Navbar></Navbar>
    <h1>Order Detail</h1>
    <div className='orow'>
        <div>Customer Name: {order.name}</div>
        <div>Phone no. : {order.phone}</div>
        <div>Email ID : {order.email}</div>
    </div>
    <div className='orow'>
        <div>Delivery Option : {order.deliverOption}</div>
        <div>Status : {order.status}</div>
        {edit&&order.deliverOption==="Pickup"&&<select onChange={(e)=>{setstatus(e.target.value)}}>
          <option>PLACED</option>
          <option>READY</option>
          <option>PICKED</option>
        </select>}
        {edit&&order.deliverOption!=="Pickup"&&<select onChange={(e)=>{setstatus(e.target.value)}}>
          <option>PLACED</option>
          <option>SHIPPED</option>
          <option>ONWAY</option>
          <option>DELIVERED</option>
        </select>}
       {!edit&& <button onClick={()=>{setedit(true)}}>Edit Status</button>}
       {order.deliverOption!=="Pickup"&& <div>Address : {order.address}</div>}
      {edit && <button onClick={saveHandler}>Save Status</button>}
      {edit && <button onClick={()=>{setedit(false)}}>close</button>}
    </div>
    
    <div className='orow'>
        {order.note.trim().length!==0&&<div>Note : {order.note}</div>}
        <div>Date : {new Date(order.date).getDate()} - {new Date(order.date).getMonth()} - {new Date(order.date).getFullYear()}</div>
        <div>time : {new Date(order.date).getHours()} : {new Date(order.date).getMinutes()} </div>
    </div>
    <h2>PRODUCTS</h2>
        <table>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>category</th>
            <th>price</th>
            <th>qty</th>
            <th>total price</th>
          </tr>
          </thead>
          <tbody>
          {
            order.products.map((data)=>{
              const imageurl = "https://infinite-sands-08332.herokuapp.com/static/" +  data.image ;
              return (
                <tr>
                  <td key={data.id}><img src={imageurl}></img></td>
                  <td key={data.id}>{data.productName}</td>
                  <td key={data.id}>{data.category.map((cat)=>{return <span>{cat} </span>}) }</td>
                  <td key={data.id}>{data.discountedPrice} ₹</td>
                  <td key={data.id}>{data.quantity}</td>
                  <td key={data.id}>{data.quantity*data.discountedPrice} ₹</td>
                </tr>
              )
            })
          }
          </tbody>
          <tfoot>
            <td colSpan={5}><h3>TOTAL</h3></td>
            <td ><h3>{totalprice} ₹</h3></td>
          </tfoot>
        </table>
    </div>
  )
}
