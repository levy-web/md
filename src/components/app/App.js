import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from '../loginsignup/Login'
import Signup from '../loginsignup/Signup' 
import Home from '../home/Home'
import Updates from '../update/update'
import {AuthContextProvider} from '../context/AuthContext'


function App() {
  return (
    <AuthContextProvider>
    <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id/tasks' element={<Updates />}></Route>
    </Routes>
    </AuthContextProvider>

  );
}

export default App;