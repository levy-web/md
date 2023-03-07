import React, {useState, useEffect} from "react"
import TaskItems from "./TaskItem"



function Task(){

    const [data, setData] = useState([])

    useEffect(()=>{

        fetch('http://localhost:9292/tasks')
        .then(res=>res.json())
        .then(data=>setData(data))
          
    }, [])



    const proj = data.map((element)=>{
        console.log(element)
        return <TaskItems 
            id={element.id}
            due={element.due}
            title={element.title} 
            description={element.description}
            key={element.id}
            status={element.status}



        />
    })

    return(
           
        <div>
            {proj}
        </div>
    )
}
 export default Task;