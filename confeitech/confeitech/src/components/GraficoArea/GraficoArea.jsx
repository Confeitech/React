import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Segunda", uv: 4 },
    { name: "Terça", uv: 3 },
    { name: "Quarta", uv: 2 },
    { name: "Quinta", uv: 5 },
    { name: "Sexta", uv: 8 },
    { name: "Sabado", uv: 2 },
    { name: "Domingo", uv: 6 },
];

const GraficoArea = () => {
    return (
        <div id="grafico" style={{ width: '100%', height: '80%' }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GraficoArea;
