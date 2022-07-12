import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {  BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Places from './components/Places/Places';
import { CreateProduct } from './components/CreateProduct';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
