import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Companies from "./Pages/Companies/Companies";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path='/blog'
          element={<Blog />} />
        <Route
          path='/companies'
          element={<Companies />} />
        <Route
          path='/login'
          element={<Login />} />
        <Route
          path='/register'
          element={<Register />} />
      </Routes>
    </BrowserRouter >


  );
}

export default App;
