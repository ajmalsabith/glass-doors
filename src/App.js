import "./App.css";
import About from "./Components/about/about";
import Home from "./Components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Components/service/service";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Home/>} />
          <Route path="*" Component={Home} />       
        </Routes>
      </BrowserRouter>
  )
}

export default App;
