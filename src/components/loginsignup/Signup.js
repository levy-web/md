import React,{useState} from "react"
import {  useNavigate, Link } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'

function Signup({userId, setUserId}){

    const[emailaddress, setEmail] = useState('')
    const[password, setPassword] = useState ('')
    const[username, setUsername] = useState ('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
  
  
    const handleSubmit = async(e) =>{
      e.preventDefault();

      setError("")
    
      try{
        await createUser(username, emailaddress, password)
        
      }catch(error){
        setError(error.message);
      }
    }
    
    function passwordChange(e){
      setPassword(e.target.value)
    }
  
    function emailaddressChange(e){
      setEmail(e.target.value)
    }

    function usernameChange(e){
      setUsername(e.target.value)
    }

    return(
        <div className="container p-5 bg-light mt-4 cols-2">
        <div className="row">
        <form onSubmit={handleSubmit}>

              <label htmlFor="InputUsername" className="form-label">Username:</label>
              <input value={username} onChange={usernameChange} type="text" className="form-control"></input>
          
              <label htmlFor="InputEmail" className="form-label">Email:</label>
              <input value={emailaddress} onChange={emailaddressChange} type="email" className="form-control"></input>
            <br />
              <label htmlFor="InputName" className="form-label">Password: </label>
              <input value={password} onChange={passwordChange} className="form-control" type="password" />
            <br/>
            <button  className="btn btn-primary" type="submit">Sign Up</button>
          </form>
        </div> 
        <p><Link to={'/login'}>Already have an account? click to Login</Link></p>
      </div> 
    )    
}

export default Signup