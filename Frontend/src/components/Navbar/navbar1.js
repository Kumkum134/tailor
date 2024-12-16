import React from "react";
import customer from "../Assits/Group 1261153051.png";
import order from "../Assits/Group 1261153052.png";
import signout from "../Assits/Group 1261153053.png";
import dashboard from "../Assits/Dashboard.png";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <div className="Left-Navbar h-screen w-full bg-[#091057] p-7 pt-20">
            <Link to={'/'}>
                <div className="flex items-center mb-6 w-44 text-red-400 bg-white p-3 rounded-full">
                    <img src={dashboard} alt="Dashboard" className="w-6 h-6 mr-4" />
                    <span className="text-sm">Dashboard</span>
                </div>
            </Link>
            <div className="flex mb-6 text-white">
                <img src={customer} alt="Customers" className="w-6 h-6 mr-4" />
                <div>
                    <h1 className="mb-2 ">Customers</h1>
                    <Link to={'/AddCustumers'}><h1 className="text-sm mb-1">Add New Customer</h1></Link>
                    <Link to={'/allcustumer'}><h1 className="text-sm">All Customers</h1></Link>
                </div>
            </div>
            <div className="flex mb-6 text-white">
                <img src={order} alt="Order" className="w-6 h-6 mr-3" />
                <div>
                    <h1 className="mb-2">Orders</h1>
                    <h1 className="text-sm mb-1">Completed Orders</h1>
                    <h1 className="text-sm mb-1">Pending Orders</h1>
                    <h1 className="text-sm">Canceled Orders</h1>
                </div>
            </div>
            <div className="flex items-center">
                <img src={signout} alt="Sign Out" className="w-6 h-6 mr-3" />
                <h1 className="text-white text-sm">Sign Out</h1>
            </div>
        </div>
    )
}
export default LeftNavbar;