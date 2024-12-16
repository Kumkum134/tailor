import React, { useState } from "react";
import edit from "../Assits/Edit Delivery Terms.png";
import remove from "../Assits/Remove.png";
import { Data } from "../Coustumers/Add-new-custumer";
import { Link } from "react-router-dom";

export const CDetails = [];

const Table = () => {
    const [rows, setRows] = useState(Data);

    const toggleStatus = (index) => {
        const updatedRows = [...rows];
        updatedRows[index].status =
            updatedRows[index].status === "Pending" ? "Complete" : "Pending";
        setRows(updatedRows);
    };
    const deleteTask = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const CDetail = (index) => {
        const selectedRow = rows[index];
        CDetails.length = 0;
        CDetails.push(selectedRow);
    }
    return (
        <div className="table-container max-h-80">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr className="text-gray-500">
                        <th className="py-2 text-left font-normal border-b w-32">Customer Name</th>
                        <th className="py-2 text-left font-normal border-b w-32">Phone Number</th>
                        <th className="py-2 text-left font-normal border-b w-64">Address</th>
                        <th className="py-2 text-left font-normal border-b w-32">Gender</th>
                        <th className="py-2 text-left font-normal border-b w-24">Status</th>
                        <th className="py-2 text-center font-normal border-b w-20">View</th>
                        <th className="py-2 text-center font-normal border-b w-14">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows.map((row, index) => (
                            <tr key={index}>
                                <td className="py-2 border-b">{row.fullName}</td>
                                <td className="py-2 border-b">{row.phoneNumber}</td>
                                <td className="py-2 border-b">{row.address}</td>
                                <td className="py-2 border-b">{row.gender}</td>
                                <td className="py-2 border-b">
                                    <button
                                        onClick={() => toggleStatus(index)}
                                        className={`py-1 px-4 rounded ${row.status === "Complete"
                                            ? "bg-green-500 text-white"
                                            : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {row.status}
                                    </button>
                                </td>
                                <td className="py-2 border-b items-center">
                                    <Link to={'/CustumerdDetails'} >
                                        <button
                                            className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                                            onClick={() => CDetail(index)}
                                        >
                                            See Details
                                        </button></Link>
                                </td>
                                <td className="py-4 border-b flex items-center justify-evenly">
                                    <Link to={'/editdetails'} state={{ customer: row }}><img
                                        src={edit}
                                        alt="edit"
                                        className="h-5 w-5 cursor-pointer"
                                    /></Link>
                                    <img
                                        src={remove}
                                        alt="delete"
                                        className="h-5 w-5 cursor-pointer"
                                        onClick={() => deleteTask(index)}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center py-4">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;