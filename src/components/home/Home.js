import { useEffect, useState } from "react";
import Nav from "./Nav"
import Task from "../tasks/Task";
import CreateTask from "../tasks/CreateTask";
function Home(){


    return(
        <div>
            <Nav />
            <div className="ms-3 mt-3">
                <div className="row">
                    <div className="col-sm-3">           
                        <div className="card bg-light">
                            <div className="card-body">
                                <h6>my Tasks</h6>
                                <Task />                                             
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">           
                        <div className="card bg-light">   
                            <div className="card-body">
                                <h4>Create Task</h4>
                                <CreateTask />
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;