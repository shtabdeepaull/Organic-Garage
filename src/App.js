import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "../src/Pages/Shared/Header/Header";
import Home from "../src/Pages/Home/Home/Home";
import Footer from "../src/Pages/Shared/Footer/Footer";
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';
import ItemsDetails from './Pages/Home/ItemsDetails/ItemsDetails';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <ItemsDetails></ItemsDetails>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
