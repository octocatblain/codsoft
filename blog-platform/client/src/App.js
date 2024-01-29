import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import BlogPost from "./Pages/BlogPost/BlogPost";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import SinglePost from "./Pages/SinglePage/SinglePost";
import WritePost from "./Pages/WritePost/WritePost";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const user = false;

  return (<BrowserRouter>
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
        path="/write"
        element={user ? <Home/> : <WritePost />}
      />
      <Route
        path="/post"
        element={<SinglePost />}
      />
      <Route
        path="/settings"
        element={user ? <Home/> : <Settings />}
      />
      <Route
        path="/login"
        element={user ? <Home/> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Home/> : <Register />}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
