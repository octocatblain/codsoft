import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BlogPost from "./Pages/BlogPost/BlogPost";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import WritePost from "./Pages/WritePost/WritePost";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <BlogPost/> */}
      {/* <WritePost/> */}
      {/* <Settings/> */}
      <Login/>
    </>
  );
}

export default App;
