import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contacts.jsx";

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [{
//       path :'',
//       element : <Home/>
//     },{
//       path : 'about',
//       element : <About/>
//     },{
//       path : "contacts",
//       element : <Contact/>
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);