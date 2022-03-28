import React from "react"
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Nav  from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import ItemsDetail from "./components/ItemsDetail";
import Home from "./components/Home";
import Material from "./components/Materail";

  // const APP_ID="c5287217";
  // const APP_KEY="b15058b664fc4b7170454e87079675df";


function App()
{
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/material" element={<Material/>}/>
          <Route path="/items/:id" element={<ItemsDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
