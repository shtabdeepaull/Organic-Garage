import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "../src/Pages/Shared/Header/Header";
import Footer from "../src/Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
