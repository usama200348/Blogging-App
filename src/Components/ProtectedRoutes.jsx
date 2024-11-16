import { onAuthStateChanged } from 'firebase/auth'
import { useEffect,useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/FirebaseMethod'
const ProtectedRoutes = ({component}) => {
   const [user,setUser]=useState(false)
    const navigate=useNavigate()
  
useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(true)
            return
        }
        navigate('/login')
    })
},[])

    return (
   <>
user ? component : <h1>Loading...</h1>
   
   </>
  )
}

export default ProtectedRoutes;