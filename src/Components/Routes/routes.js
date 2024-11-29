// src/Components/Routes/routes.js

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import HomeDashboard from '../Dashboard/Home';
import Login from '../Auth/Login';
import NotFound from '../NotFound/NotFound';
import LoginDashboard from "../Dashboard/Auth/Login/Login";
import MyDataTable from '../DataTable/DataTable';
import Slider from '../Dashboard/Slider/Slider';
import About from '../Dashboard/About/About';

const routers = createBrowserRouter([
  {  
    path: "", 
    element: <Layout/>,  // General layout for non-dashboard pages
    children: [
      { path: "Home", element: <Home/> },
      { path: "Login", element: <Login/> },
      { path: "MyDataTable", element: <MyDataTable/> },
      { path: "*", element: <NotFound/> }
    ] 
  },
  { 
    path: "Dashboard", 
    element: <Dashboard/>,  // Dashboard layout for dashboard pages
    children: [
      { path: "", element: <LoginDashboard/> }, 
      { path: "homeDashboard", element: <HomeDashboard/> },
      { path: "slider", element: <Slider/> },
      { path: "About", element: <About/> },
    ]
  }
]);
export default routers;