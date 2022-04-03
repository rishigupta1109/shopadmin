import { Routes,Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import Inventory from "./pages/Inventory";
import UsersPage from "./pages/UsersPage";
import Home from './pages/Home';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';


function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/usersPage' element={<UsersPage/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/orders/:orderid' element={<OrderDetail />}/>
    </Routes>
    </div>
  );
}

export default App;
