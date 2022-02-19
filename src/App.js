import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {  BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Places from './components/Places/Places';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
