import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import AdmLogin from './pages/AdmLogin'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Forget from './pages/Forget'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/adm" element={<AdmLogin/>}/> 
      <Route path="/forget" element={<Forget/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
