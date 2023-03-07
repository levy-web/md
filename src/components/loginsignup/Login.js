import React,{useState } from "react"
import {  useNavigate, Link } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'

function Login({userId, setUserId}){

    const[username, setUsername] = useState ('')
    const[password, setPassword] = useState ('')
    const {signIn} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    
  
  
    const handleSubmit = async(e) =>{
      e.preventDefault();

      setError("")
    
      try{
        await signIn(username, password)

      }catch(error){
        setError(error.message);
      }


    }
    
    function passwordChange(e){
      setPassword(e.target.value)
    }
  
    function usernameChange(e){
      setUsername(e.target.value) 
    }
    
    return(
        <div className="container p-5 bg-light mt-4 cols-2">
        <div className="row">
        <form onSubmit={handleSubmit}>
              <label htmlFor="InputEmail" className="form-label">Username:</label>
              <input value={username} onChange={usernameChange} type="text" className="form-control"></input>
            <br />
              <label htmlFor="InputName" className="form-label">Password: </label>
              <input value={password} onChange={passwordChange} className="form-control" type="password" />
            <br/>
            <button  className="btn btn-primary" type="submit">Login</button>
          </form>
        </div> 
        <p><Link to={'/signup'}>Already have an account? Sign Up here</Link></p>
      </div> 
    )
}

export default Login