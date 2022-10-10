import React, { useState } from "react";
import Button from "../components/Button";
const Dashboard = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="text-6xl text-red-600">{count}</div>
                <Button disabled={true}  />;
            </div>
        </div>
    )
}
export default Dashboard;