import React from "react";
import NavLink from "../components/YaNavLink";
const LandingPage = () => {
    return (
        <div className="flex h-screen">
                login click tombol dibawah
            <div className="m-auto">
                <NavLink disabled={false} name="Masuk" url="/Login" />
            </div>
        </div>
    )
}
export default LandingPage;