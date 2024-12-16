import React from "react";
import LeftNavbar from "../components/Navbar/navbar1";
import RightNavbar from "../components/Navbar/navbar2";
import AddCustomerUI from "../components/Coustumers/Add-new-custumer";

const NewCustumer = () => {
    return (
        <div className="Dashboard h-full w-full flex">
            <div className="w-1/6">
                <LeftNavbar />
            </div>
            <div className="w-5/6 bg-[#f9e5c9]">
                <RightNavbar />
                <AddCustomerUI/>
            </div>
        </div>
    );
}
export default NewCustumer;