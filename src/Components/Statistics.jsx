import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area
} from "recharts";
const Statistics = () => {
    const data = [
        {
            id: "A1",
            name: "Assignment-1",
            obtainedMarks: 30,
            totalMarks: 60,

        },
        {
            id: "A2",
            name: "Assignment-2",
            obtainedMarks: 60,
            totalMarks: 60,
        },
        {
            id: "A3",
            name: "Assignment-3",
            obtainedMarks: 60,
            totalMarks: 60,
        },
        {
            id: "A4",
            name: "Assignment-4",
            obtainedMarks: 60,
            totalMarks: 60,
        },
        {
            id: "A5",
            name: "Assignment-5",
            obtainedMarks: 58,
            totalMarks: 60,
        },
        {
            id: "A6",
            name: "Assignment-6",
            obtainedMarks: 57,
            totalMarks: 60,
        },
        {
            id: "A7",
            name: "Assignment-7",
            obtainedMarks: 60,
            totalMarks: 60,
        },
        {
            id: "A8",
            name: "Assignment-8",
            obtainedMarks: 60,
            totalMarks: 60,
        }
    ];
    const avgMarks = () => {
        const totalAssignments = data.length;
        let sumOfObtainedMarks = 0;
        for (const assginment of data) {
            sumOfObtainedMarks += assginment.obtainedMarks;
        }
        return (sumOfObtainedMarks / totalAssignments).toFixed(2);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl font-extrabold my-10">Assignment Analytics</h3>
            <div className="flex justify-center items-center gap-4">
                <FontAwesomeIcon className="w-12 h-12" icon={faChartLine} />
                <div>
                    <h3 className="text-lg font-semibold">{avgMarks()}</h3>
                    <p>Avg Assignment Mark</p>
                </div>
            </div>
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 60
                }}
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalMarks" barSize={20} fill="#413ea0" />
                <Line dataKey="obtainedMarks" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;