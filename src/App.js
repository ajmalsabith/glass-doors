import "./App.css";
import Home from "./Components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
