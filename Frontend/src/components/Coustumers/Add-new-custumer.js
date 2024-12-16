import React, { useState } from "react";
export const Data = [];
export const SubmitData = [];

const AddCustomerUI = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        phoneNumber: "",
        address: "",
        waistSize1: "",
        waistSize2: "",
        waistSize3: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.gender || !formData.phoneNumber || !formData.address) {
            alert("Please fill all required fields!");
            return;
        }

        Data.push({ ...formData, status: "Pending" });
        SubmitData.push({ submissionCount: SubmitData.length + 1 }); 

        alert("Data submitted successfully!");
        setFormData({
            fullName: "",
            gender: "",
            phoneNumber: "",
            address: "",
            waistSize1: "",
            waistSize2: "",
            waistSize3: ""
        });
    };

    return (
        <div className="form-container h-[45.8rem] w-full p-8 bg-[#f9e5c9]">
            <div className="bg-white rounded-md w-full md:w-7/12">
                <div className="border-b p-4">
                    <h2 className="form-title text-xl font-medium pl-6">Add New Customer</h2>
                </div>
                <form className="customer-form grid gap-4 p-6 pl-8" onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter full name"
                            required
                        />
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                    <div>
                        <label className="form-label block mb-2 text-sm font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-input text-xs w-80 mb-4 p-3 border rounded-lg"
                            placeholder="Enter address"
                            required
                        />
                    </div>
                    <div>
                        <h1 className="mb-2 text-sm font-medium">Measurement</h1>
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="number"
                                name="waistSize1"
                                value={formData.waistSize1}
                                onChange={handleChange}
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Enter Waist size 1"
                            />
                            <input
                                type="number"
                                name="waistSize2"
                                value={formData.waistSize2}
                                onChange={handleChange}
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Enter Waist size 2"
                            />
                            <input
                                type="number"
                                name="waistSize3"
                                value={formData.waistSize3}
                                onChange={handleChange}
                                className="form-input text-xs w-full p-3 border rounded-lg"
                                placeholder="Enter Waist size 3"
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

export default AddCustomerUI;