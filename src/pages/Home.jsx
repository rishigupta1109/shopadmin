import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import add from "../assets/add.png";
import users from "../assets/users.png";
import orders from "../assets/orders.png";
import inventory from "../assets/inventory.png";
export default function Home() {
  return (
    <div className='home'>
        <h1>Admin Panel</h1>
        <div className='column'>
            <Link to="/addProduct">
          <div className='pagebtn'>
            <img src={add}></img>
            Add Product
          </div>
            </Link>
            <Link to="/inventory">
          <div className='pagebtn'>
            <img src={inventory}></img>
            Inventory
          </div>
            </Link>
            <Link to="/usersPage">
          <div className='pagebtn'>
            <img src={users}></img>
            Users Page
          </div>
            </Link>
            <Link to="/orders">
          <div className='pagebtn'>
            <img src={orders}></img>
            Orders Page
          </div>
            </Link>
        </div>
    </div>
  )
}
