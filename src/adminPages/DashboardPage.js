import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const salesData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Sep', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Oct', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Nov', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

const trafficData = [
  { name: 'Desktop', value: 63 },
  { name: 'Tablet', value: 15 },
  { name: 'Phone', value: 22 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Budget */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 120 }}>
          <Typography variant="h6">Budget</Typography>
          <Typography variant="h4">$24k</Typography>
          <Typography variant="body2" color="text.secondary">↑ 12% Since last month</Typography>
        </Paper>
      </Grid>
      {/* Total Customers */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 120 }}>
          <Typography variant="h6">Total Customers</Typography>
          <Typography variant="h4">1.6k</Typography>
          <Typography variant="body2" color="text.secondary">↓ 16% Since last month</Typography>
        </Paper>
      </Grid>
      {/* Task Progress */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 120 }}>
          <Typography variant="h6">Task Progress</Typography>
          <Typography variant="h4">75.5%</Typography>
        </Paper>
      </Grid>
      {/* Total Profit */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 120 }}>
          <Typography variant="h6">Total Profit</Typography>
          <Typography variant="h4">$15k</Typography>
        </Paper>
      </Grid>
      {/* Sales Chart */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
          <Typography variant="h6">Sales</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      {/* Traffic Source */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
          <Typography variant="h6">Traffic Source</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
