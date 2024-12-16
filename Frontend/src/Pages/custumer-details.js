import React from "react";
import LeftNavbar from "../components/Navbar/navbar1";
import RightNavbar from "../components/Navbar/navbar2";
import Details from "../components/Coustumers/Customer-details";
const CustumerDetails = () => {
    return (
        <div>
            <div className="Dashboard h-full w-full flex">
                <div className="w-1/6">
                    <LeftNavbar />
                </div>
                <div className="w-5/6 bg-[#f9e5c9]">
                    <RightNavbar />
                    <Details />
                </div>
            </div>
        </div>
    ); 
}
export default CustumerDetails;