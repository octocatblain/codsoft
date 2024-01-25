import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BlogPost from "./Pages/BlogPost/BlogPost";
import Home from "./Pages/Home/Home";
import WritePost from "./Pages/WritePost/WritePost";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <BlogPost/> */}
      <WritePost/>
    </>
  );
}

export default App;
