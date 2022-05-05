import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "../src/Pages/Shared/Header/Header";
import Home from "../src/Pages/Home/Home/Home";
import Footer from "../src/Pages/Shared/Footer/Footer";
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*'  element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
