import { Routes,Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import Inventory from "./pages/Inventory";
import UsersPage from "./pages/UsersPage";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/usersPage' element={<UsersPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
