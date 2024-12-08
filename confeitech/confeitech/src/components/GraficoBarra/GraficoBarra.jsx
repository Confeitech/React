import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import api from "../../api";

const GraficoBarra = ({ data }) => {
    const formattedData = data.map((value, index) => ({
        name: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"][index],
        uv: value,
    }));

    return (
        <div id="graficco" style={{ width: '100%', height: '80%' }}>
            <ResponsiveContainer>
                <BarChart
                    data={formattedData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GraficoBarra;
