import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Layout } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DashboardActions } from '../../stores/actions';

import './Dashboard.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Dashboard = () => {
    const dispatch = useDispatch();
    const { inventory } = useSelector( ({Dashboard}) => Dashboard);

    const labels = inventory.map(data => data.date);
    const data = {
          labels,
          datasets: [
            {
              label: 'Inventory',
              data: inventory.map(data => data.quantity),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ],
      };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart',
        },
      },
    };

    const handleChange = (e) => {
      dispatch(DashboardActions.getInventory(e.target.value));
    };

    return (
        <Layout className="main-layout flex h-screen">
            <select onChange={handleChange}>
              <option value={1}>Item 1</option>
              <option value={2}>Item 2</option>
              <option value={3}>Item 3</option>
            </select>
            <Line options={options} data={data} />
        </Layout>
    );
}

export default Dashboard;
