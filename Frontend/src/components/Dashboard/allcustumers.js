import React from "react";
import Navbar from "../allcustumers/Navbar";
import Table from "../allcustumers/table";
import { Link } from "react-router-dom";

const AllCustumrer = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="w-11/12">
                    <Navbar />
                </div>
                <Link to={'/allcustumer'}> <button className="bg-blue-50 text-sm px-5 py-2 rounded-xl">
                    See All
                </button></Link>
            </div>
            <div className="max-h-80 overflow-y-scroll scrollbar-hide mt-2">
                <Table />
            </div>
        </div>
    );
};

export default AllCustumrer;
