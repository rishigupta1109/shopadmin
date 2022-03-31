import "../styles/Inventory.css";
import { useState,useEffect } from "react";
const Inventory = () => {
    const [Data, setData] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:9000/getProducts";
        const response =await fetch(url);
        await response.json().then((data) => {
            setData(data); console.log(data);
        } );
        
    }
    // {
    //     "_id": "61f149cb5c925a39ebcde2c3",
    //     "productID": 4,
    //     "productName": "product 5",
    //     "stock": 10,
    //     "category": [
    //         "strategy"
    //     ],
    //     "productType": "image",
    //     "price": 2000,
    //     "discountedPrice": 1500,
    //     "image": "1643203019134-881877155final logo.png",
    //     "__v": 0
    // }
    useEffect(fetchData, []);
    return (
        <div className="inventorypage">
            <h1>Inventory</h1>
            {Data.length !== 0 &&
                <table>
                    <thead>
                    <tr>
                                <th>
                                    Image
                                </th>
                                <th>Product Name </th>
                                <th>category</th>
                                <th>Product Type</th>
                                <th>Price</th>
                                <th>Discounted Price</th>
                                <th>Stock</th>
                            </tr>
                    </thead>
                    <tbody>

                    {Data.map((data) => {
                        const url = "https://infinite-sands-08332.herokuapp.com/static/" +  data.image ;
                        return (
                            <tr key={data.id}> 
                                <td key={data.id}>
                                    <img src={url} alt="product" />
                                </td>
                                <td key={data.id}>{data.productName }</td>
                                <td key={data.id}>{data.category.map((cat)=>{return <span>{cat}</span>}) }</td>
                                <td key={data.id}>{data.productType }</td>
                                <td key={data.id}>{data.price }</td>
                                <td key={data.id}>{data.discountedPrice }</td>
                                <td key={data.id}>{data.stock }</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
           }
        </div>
    );
}

export default Inventory;