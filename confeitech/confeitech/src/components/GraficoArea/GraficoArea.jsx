import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const GraficoArea = ({ data }) => {
    const formattedData = data.map((value, index) => ({
        name: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"][index],
        uv: value,
    }));

    return (
        <div id="grafico" style={{ width: '100%', height: '80%' }}>
            <ResponsiveContainer>
                <AreaChart
                    data={formattedData}
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
