import "./App.css";
import AddProduct from "./pages/AddProduct";
import Inventory from "./pages/Inventory";
import UsersPage from "./pages/UsersPage";
function App() {
  return (
    <div className="App">
      <AddProduct></AddProduct>
      <Inventory></Inventory>
      <UsersPage></UsersPage>
    </div>
  );
}

export default App;
