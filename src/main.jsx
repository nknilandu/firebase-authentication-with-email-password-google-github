import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home.jsx';
import { Root } from './Components/Root/Root.jsx';
import Login from './Components/Login.jsx';
import { Register } from './Components/Register.jsx';
import { ForgotPass } from './Components/ForgotPass.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "forgotPassword", Component: ForgotPass }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
