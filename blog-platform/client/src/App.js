import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BlogPost from "./Pages/BlogPost/BlogPost";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import SinglePost from "./Pages/SinglePage/SinglePost";
import WritePost from "./Pages/WritePost/WritePost";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  const user = false;

  return (
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/post/:postId">
    //       <SinglePost />
    //     </Route>
    //     <Route path="/write">
    //       {user ? <WritePost /> : <Register />}
    //     </Route>
    //     <Route path="/settings">
    //       <Settings />
    //     </Route>
    //     <Route path="/login">
    //       {user ? <Home /> : <Login />}
    //     </Route>
    //     <Route path="/register">
    //       {user ? <Home /> : <Register />}
    //     </Route>
    //   </Switch>
    // </Router>

    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Home />
      <SinglePost />
      <WritePost />
      <Settings />
      <Login />
      <Register />*/}
      {/* <div>{children}</div> */}
    </>
  );
}

export default App;
