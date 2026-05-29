'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: { color: '#fff' }
    },
    title: {
      display: true,
      text: 'Weekly Activity',
      color: '#fff'
    },
  },
  scales: {
    x: { ticks: { color: '#fff' } },
    y: { ticks: { color: '#fff' } }
  }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Tasks Completed',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(6, 182, 212, 0.5)',
    },
  ],
};

export function DashboardStats() {
  return (
    <div className="bg-black/40 p-6 rounded-2xl border border-white/10 mt-8">
      <Bar options={options} data={data} />
    </div>
  );
}
