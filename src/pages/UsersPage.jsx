import "../styles/UsersPage.css";
import { useState,useEffect } from "react";
import Navbar from './../components/navbar';
const UsersPage = () => {
    const [Data, setData] = useState([]);
    const fetchData = async () => {
        // const url = "http://localhost:9000/getUsers";
        const url = "https://infinite-sands-08332.herokuapp.com/getUsers";
        const response =await fetch(url);
        await response.json().then((data) => {
            setData(data); console.log(data);
        } );
        
    }
    useEffect(fetchData, []);
    return (
        <div>

        <Navbar></Navbar>
        <div className="userpage">
                <h1>Customer detail</h1>
            {Data.length !== 0 &&
                <table>
                    <tr>
                            
                                <th>Name </th>
                                <th>Number</th>
                                <th>email</th>
                                <th>Address</th>
                            </tr>
                    {Data.map((data) => {
                        return (
                            <tr>
                                <td>{data.name }</td>
                                <td>{data.number }</td>
                                <td>{data.email }</td>
                                <td>{data.address }</td>
                            </tr>
                        )
                    })}
                </table>
           }
        </div>
        </div>
    )
}

export default UsersPage;