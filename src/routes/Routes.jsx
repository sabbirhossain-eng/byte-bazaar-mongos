import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: 
      [
        {path: "/",
      element: <Home/>},
      {
        path: "/signIn",
        element: <SignIn/>
      },
    
    ]
    },
  ]);