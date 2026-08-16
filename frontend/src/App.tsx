import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./features/products/Products";
import Home from "./features/home/Home";
import Blogs from "./features/blogs/Blogs";
import NavBar from "./shared/NavBar";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/Products" element={<Products></Products>}></Route>
          <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/*"
            element={
              <div>Error 404: PageNot Found Try /about or /home or /</div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
