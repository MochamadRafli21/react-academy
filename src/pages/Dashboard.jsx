import React , {useEffect} from "react";
import NavLink from "../components/YaNavLink";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('access_token')
      if(!token){
        navigate('/login')
      }
    });
    
    return (
        <div className="flex h-screen">

              <Sidebar is_active={true}/>
            <div className="m-auto">
                <NavLink disabled={false} name="Masuk" url="/Login" />
            </div>
        </div>
    )
}
export default Dashboard;