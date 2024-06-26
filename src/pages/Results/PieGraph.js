import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function PieGraph({ pieData, seatRef }) {
    return (
        <div className='results-chart' ref={seatRef}>
            <h2>Κατανομή Εδρών</h2>
            <PieChart className='pie-chart' width={425} height={450}>
                <Pie data={pieData} dataKey='seats' nameKey='party' cx='50%' cy='50%' outerRadius={100} label>
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}