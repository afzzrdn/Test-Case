// components/HourlyLineChart.js

import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const HourlyLineChart = () => {
  const data = {
    labels: [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
    ],
    datasets: [
      {
        data: [0.62, 0.6, 0.68, 0.6, 0.6, 0.6, 0.7, 0.58, 0.56, 0.57, 0.58, 0.6, 0.59, 0.58, 0.6, 0.59, 0.6, 0.61, 0.62, 0.6, 0.58, 0.57, 0.56, 0.55], // Update with your data
        fill: true, // Enable fill below the line
        backgroundColor: '#3366ff', // Light blue fill color
        borderColor: '#4285F4', // Line color (blue)
        borderWidth: 1,
        tension: 0.2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
            display: false, // Hide vertical grid lines
          },
      },
      y: {
        beginAtZero: true,
        max: 1, // Set the maximum y-axis value
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default HourlyLineChart;
