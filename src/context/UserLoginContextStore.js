import React,{useState} from 'react'
import {loginContext} from "./loginContext"
import axios from 'axios'
function UserLoginContextStore({children}){
    let [currentUser,setCurrentUser]=useState({})
    let[error,setError]=useState("")
    let[userLoginStatus,setUserLoginStatus]=useState(false)
    // userlogin 
    const loginUser=(userCredObj)=>{
        axios.post("http://localhost:5000/user-api/login-user",userCredObj)
        .then(response=>{
            if(response.data.message==="success"){
                setCurrentUser({...response.data.user})
                // update user login status
                setUserLoginStatus(true)
                setError("")
                sessionStorage.setItem("token",response.data.token)
            }
            else{
                setError(response.data.message)
            }
        }

        )
        .catch(err=>{})

    }
    const logoutUser=()=>{

    }
    return (
        <loginContext.Provider value={[currentUser,error,userLoginStatus,loginUser,logoutUser]}>{children}</loginContext.Provider>
    )
    
}
export default UserLoginContextStore