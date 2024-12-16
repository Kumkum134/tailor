import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <div className="navbar flex justify-between">
            <h1 className="text-xl font-bold">All Customers</h1>
            <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                <FontAwesomeIcon icon={faSearch} className="mr-2 text-black" />
                <input type="text" placeholder="Search..." className="bg-blue-50" />
            </div>
        </div>
    );
}
export default Navbar;