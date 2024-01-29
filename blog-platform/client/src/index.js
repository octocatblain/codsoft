import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { element } from "prop-types";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import WritePost from "./Pages/WritePost/WritePost";
import Register from "./Pages/Register/Register";
import SinglePost from "./Pages/SinglePage/SinglePost";
import Home from "./Pages/Home/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "settings",
//     element: <Settings/>,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
//   {
//     path: "write",
//     element: <WritePost />,
//   },
//   {
//     path: "register",
//     element: <Register />,
//   },
//   {
//     path: "/post",
//     element: <SinglePost/>,
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // <RouterProvider router={router}/>
);
