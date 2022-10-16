import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import AdmLogin from './pages/AdmLogin'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Forget from './pages/Forget'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/adm" element={<AdmLogin/>}/> 
      <Route path="/forget" element={<Forget/>}/>
    </Routes>
  )
}

export default App
