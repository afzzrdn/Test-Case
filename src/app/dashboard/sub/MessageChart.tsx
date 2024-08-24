// components/MessageStatisticsChart.js

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const MessageStatisticsChart = () => {
  const data = {
    datasets: [
      {
        data: [45, 8, 23], 
        backgroundColor: ['#3366FF', '#4FBEAB', '#a4a2a2'],
      },
    ],
  };

  const options = {
    cutout: '65%',
  };

  return (
    <div style={{ width: '130px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MessageStatisticsChart;
