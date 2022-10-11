import React, { useState } from "react";
import NavLink from "../components/NavLink";
const Dashboard = () => {
    return (
        <div className="flex h-screen">
                login click tombol dibawah
            <div className="m-auto">
                <NavLink disabled={false} name="Masuk" url="/Login" />
            </div>
        </div>
    )
}
export default Dashboard;