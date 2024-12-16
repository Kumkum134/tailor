import React from "react";
import LeftNavbar from "../components/Navbar/navbar1";
import RightNavbar from "../components/Navbar/navbar2";
import AllCustumrer from "../components/Coustumers/total_customer";
const AllCustumers = () => {
    return (
        <div>
            <div className="Dashboard h-full w-full flex">
                <div className="w-1/6">
                    <LeftNavbar />
                </div>
                <div className="w-5/6 bg-[#f9e5c9]">
                    <RightNavbar />
                    <div className="bg-white h-5/6 p-4 w-11/12 m-4 mt-8 rounded-3xl">
                        <AllCustumrer/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AllCustumers;