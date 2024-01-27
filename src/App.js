import "./App.css";
import About from "./Components/about/about";
import Home from "./Components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" Component={Home} />       
        </Routes>
      </BrowserRouter>
  )
}

export default App;
