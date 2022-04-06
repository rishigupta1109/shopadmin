import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";
export default function Navbar() {
  return (
    
    <div className='navbar'>
        <ul>
            <li><NavLink to='/inventory' className={(navdata)=>{return navdata.isActive?"active":"inactive"}}>Inventory</NavLink></li>
            <li><NavLink to='/addProduct' className={(navdata)=>{return navdata.isActive?"active":"inactive"}}>Add Product</NavLink></li>
            <li><NavLink to='/usersPage' className={(navdata)=>{return navdata.isActive?"active":"inactive"}}>Customers</NavLink></li>
            <li><NavLink to='/orders' className={(navdata)=>{return navdata.isActive?"active":"inactive"}}>Orders</NavLink></li>
        </ul>
    </div>
  )
}
