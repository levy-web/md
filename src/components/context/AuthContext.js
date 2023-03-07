import { createContext, useContext, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom"

const UserContext = createContext();





export const AuthContextProvider = ({children}) => {
    // declare all method for app
    const [userId, setUserId] = useState('')
    const [data, setData] = useState([])
    const [task, setTask] = useState([])
    console.log(userId)

    const navigate = useNavigate()
    

 

    

    const createUser = (username, emailaddress, password) => {
        let formData = {
            "full_name": username,
            "password_hash": password,
            "email": emailaddress
          }
        fetch('http://localhost:9292/signup',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            setUserId(data.id)
            console.log(data)
            // setUser(data)
            navigate('/')
          })
    }


      const signIn = (username, password) => {
        let formData = {
            "full_name": username,
            "password_hash": password
          }
        fetch('http://localhost:9292/login',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            setUserId(data.id)
            console.log(data)
            navigate('/')
                        
          })
      }

   

    const logout = () => {
      fetch('http://localhost:9292/logout')
      .then((res)=>res.json())
      .then((data)=>{
        setUserId([])
          console.log(data)
          navigate('/login')
      })
    }

    const updateTask = (id) => {
      fetch(`http://localhost:9292/tasks/${id}`)
      .then((res)=>res.json())
      .then((data)=>{
          setTask(data)
          navigate(`/${id}/project`)
      })

    }


    return(
        <UserContext.Provider value={{userId,data,task,updateTask, setData, signIn, logout, createUser}}>

            {children}

        </UserContext.Provider>
    )

}
export const UserAuth = () =>{
    return useContext(UserContext)
}