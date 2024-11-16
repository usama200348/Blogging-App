import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Pages/Login.jsx'
import Resgister from './Pages/Resgister.jsx'
import ProtectedRoutes from './Components/ProtectedRoutes.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Profile from './Pages/Profile.jsx'
import User from './Pages/User.jsx'
  
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
      path:'',
      element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Resgister/>
      },
      {
        path:'dashboard',
        element:<ProtectedRoutes component={<Dashboard/>}/>
      },
      {
        path:'profile',
        element:<ProtectedRoutes component={<Profile/>}/>
      },
      {
        path:'user/:id',
        element:<ProtectedRoutes component={<User/>}/>
      }
    ]
  }
])





createRoot(document.getElementById('root')).render(


<RouterProvider router={router}/>

)
