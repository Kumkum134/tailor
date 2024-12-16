import React from "react";
import { SubmitData } from "../Coustumers/Add-new-custumer"; 
import icon1 from "../Assits/Icon-2.png";

const BoxA = () => {
    const totalCustomers = SubmitData.length;

    return (
        <>
            <img src={icon1} alt="icon-1" className="h-9 w-9" />
            <p className="font-bold text-2xl">{totalCustomers}</p> 
            <h1 className="font-normal text-xl">Total Customers</h1>
        </>
    );
}

export default BoxA;