import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import AdmLogin from './pages/AdmLogin'
import Dashboard from './pages/Dashboard'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adm" element={<AdmLogin/>}/>
    </Routes>
  )
}

export default App
