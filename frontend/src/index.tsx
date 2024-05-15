import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Pubform from './Components/pubform';
import Pubpage from './Components/pubpage';
import AddMemberForm from './Components/Addmembersform';
import AdminPanel from './Components/adminpage';
import LoginForm from './Components/loginform';
import SignupForm from './Components/signupform';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/pub",
    element: <Pubpage/>,
  },
  {
    path: "/pubform",
    element: <Pubform/>,
  },
  {
    path: "/addmemebers",
    element: <AddMemberForm/>,
  },
  {
    path: "/admin",
    element: <AdminPanel/>,
  },
  {
    path: "/loginform",
    element: <LoginForm/>,
  },
  {
    path: "/signupform",
    element: <SignupForm/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
