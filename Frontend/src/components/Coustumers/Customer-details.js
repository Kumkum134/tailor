import React from "react";
import { CDetails } from "../allcustumers/table";

const Details = () => {
    const detail = CDetails[0];

    if (!detail) {
        return <div>No details available</div>;
    }

    return (
        <div className="Details h-[45.8rem] w-full p-8 bg-[#f9e5c9]">
            <div className="bg-white rounded-md w-full md:w-7/12 p-4">
                <h1 className="text-2xl font-bold border-b p-4">Customer Details</h1>
                <h1 className="text-2xl font-bold">Name:</h1> {detail.fullName}
                <h1 className="text-2xl font-bold">Phone Number:</h1>{detail.phoneNumber}
                <h1 className="text-2xl font-bold">Address:</h1>{detail.address}
                <h1 className="text-2xl font-bold">Measurement:</h1>
                <p>Wist: {detail.waistSize1}inches</p>
                <p>Wist: {detail.waistSize2}inches</p>
                <p>Wist: {detail.waistSize3}inches</p>
            </div>
        </div>
    );
};

export default Details;
