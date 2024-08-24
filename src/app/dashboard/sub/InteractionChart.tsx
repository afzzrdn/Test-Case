import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const InteractionChart = () => {
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'
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

export default InteractionChart;