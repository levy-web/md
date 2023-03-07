import React, {useEffect, useState} from "react"
import {  useNavigate, Link } from "react-router-dom"
import Nav from "../home/Nav"



function Updates({project, setProject}){
    const [username, setUsername] = useState('')
    const [status, setStatus] = useState(0)
    const [description, setdescription] = useState(project.description)
    const [contributor, setContributor] = useState([])
    const [contrib, setContrib] = useState([])
    const navigate = useNavigate()
    const [projId, setprojId] = useState('')
    console.log(project)
    console.log(contributor)



    // useEffect(()=>{
    //     const data = window.localStorage.getItem('PROJECTID')
    //     if (data !== null){
    //       console.log(data)
    //       setprojId(JSON.parse(data))}
  
    //   },[])

    //   useEffect((project)=>{
    //     window.localStorage.setItem('PROJECTID', JSON.stringify(project.id)) 
    //   }, [projId])
  


    function onDescriptionChange(e){
        setdescription(e.target.value)
        console.log(e.target.value)

    }

    function getChangedValue(e){
        setStatus(e.target.value)        
    }
    function usernameChange(e){
        setUsername(e.target.value)
    }

    function handleDeleteProject(){
        fetch(`https://levy-projets-api.onrender.com/projects/${project.id}`,{
            method: 'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
            setContributor(data)
            navigate('/') 
        })


    }

    function handleUpdateProject(){
        const formData={
            description: description,
            status: status
        }

        fetch(`https://levy-projets-api.onrender.com/projects/${project.id}`,{
            method: 'PATCH',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            setContributor(data)
            navigate('/') 
        })


    }

    function getContributor(e){
        e.preventDefault()

        const formData={
            username: username,
            project_id: project.id
        }

        fetch('https://levy-projets-api.onrender.com/members',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then((res)=>res.json())
        .then((data)=>setContrib(data))


    }
    useEffect(()=>{

        fetch(`https://levy-projets-api.onrender.com/users/${project.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setContributor(data)
        })

    },[contrib])

    const contr = contributor.map((element)=>{
        return <li key={element.id} >{element.username}</li>
    })





    return(
        <div className="ms-3 mt-3">
            <Nav/>
            <div className="row">
                <div className="col-sm-6">           
                    <div className="card bg-light">
                    <button onClick={handleDeleteProject} type="button" className="btn btn-danger me-2 mt-2 ms-auto">delete project</button>
                        <div className="card-body">

                            
                            
                            <h5 className="card-title">{project.title}</h5>
                            <textarea defaultValue={description} onChange={onDescriptionChange} rows='10' className="form-control"></textarea>
                            <small className="text-muted me-5">{`status:`}</small>
                            <select onChange={getChangedValue} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>${project.status}</option>
                                <option value="1">complete</option>
                                <option value="2">pending</option>
                            </select>

                        </div>
                        <button onClick={handleUpdateProject} type="button" className="btn btn-success mb-2 p-2 m-auto">save</button>
                    </div>
                </div>
                <div className="col-sm-5">           
                    <div className="card bg-light">   
                        <div className="card-body">
                            <h5 className="card-title">{`Add contributor:`}</h5>
                            <form onSubmit={getContributor}>
                                <label htmlFor="InputEmail" className="form-label">Username</label>                              
                                <input value={username} onChange={usernameChange} type="text" className="ms-2"></input>
                                <button  className="btn btn-primary ms-2" type="submit">add</button>
                            </form>
                            
                        </div>
                    </div>
                    <div className="card bg-light mt-2">
                        <div className="card-body">
                        <h5 className="card-title">{`contributors:`}</h5>
                            <ol>{contr}</ol>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Updates