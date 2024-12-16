import React from "react";
import userimg from "../Assits/Ellipse 3226.png";

const RightNavbar = () => {
    return (
        <div className="Right_navbarw-full p-2 border-b-2 border-stone-300 flex justify-between px-4">
            <h1 className="text-2xl font-medium mt-1">Dashboard</h1>
            <div className="flex gap-4">
                <select className="bg-transparent font-bold">
                    <option>Eng (US)</option>
                    <option>Eng (IND)</option>
                </select>
                <div className="flex w-40 bg-white h-12 rounded-full">
                    <img src={userimg} alt="user-image" className="h-12 mt-1" />
                    <div className="h-12 mt-1">
                        <h1 className="text-sm">User name</h1>
                        <h1 className="text-sm text-zinc-500">Admin</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RightNavbar;