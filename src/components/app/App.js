import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from '../loginsignup/Login'
import Signup from '../loginsignup/Signup' 
import Home from '../home/Home'
import Updates from '../update/update'


function App() {
  return (
    <Routes>
        <Route to='/login' element={<Login />}></Route>
        <Route to='/signup' element={<Signup />}></Route>
        <Route to='/' element={<Home />}></Route>
        <Route to='/:id/tasks' element={<Updates />}></Route>
    </Routes>

  );
}

export default App;