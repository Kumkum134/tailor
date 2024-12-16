import React from "react";

const EditCustomer = () => {
  
    return (
        <div className="form-container h-[45.8rem] w-full p-8 bg-[#f9e5c9]">
            <div className="bg-white rounded-md w-full md:w-7/12">
                <div className="border-b p-4">
                    <h2 className="form-title text-xl font-medium pl-6">Edit Customer</h2>
                </div>
                <form className="customer-form grid gap-4 p-6 pl-8">
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter full name"
                        />
                    </div>
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Phone Number</label>
                        <input
                            type="text"
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Address</label>
                        <input
                            type="text"
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter address"
                        />
                    </div>
                    <div>
                        <h1 className="mb-2 text-sm font-medium">Gender</h1>
                        <div className="flex gap-4 mb-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    className="mr-2"
                                />
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-2 text-sm font-medium">Measurements</h1>
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="number"
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Waist size 1"
                            />
                            <input
                                type="number"
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Waist size 2"
                            />
                            <input
                                type="number"
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Waist size 3"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 w-full md:w-36 rounded-md p-2 text-white">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCustomer;