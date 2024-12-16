import React from "react";
import BoxA from "../overview box/overview_box1";
import BoxB from "../overview box/overview_box2";
import BoxC from "../overview box/overview_box3";
const Overview = () => {
    return (
        <div className="Overview mt-4 ml-4 bg-white px-5 p-3 w-4/6 rounded-3xl">
            <h1 className="font-bold text-xl">Overview</h1>
            <p className="text-zinc-500 mt-2">Summary</p>
            <div className="flex gap-8 mt-8 h-40">
                <div className="h-36 p-5 bg-green-200 w-1/3 rounded-3xl">
                    <BoxA />
                </div>
                <div className="h-36 p-5 bg-orange-200 w-1/3 rounded-3xl">
                    <BoxB />
                </div>
                <div className="h-36 p-5 bg-red-200 w-1/3 rounded-3xl">
                    <BoxC />
                </div>
            </div>
        </div>
    );
}
export default Overview;