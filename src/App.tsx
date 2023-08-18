import './App.css'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EventData {
  quantity: number;
  period: string;
  event_name: string;
}

const eventPerHour: EventData[] = [
  {
    quantity: 50,
    period: '00:00h',
    event_name: 'teste',
  },
  {
    quantity: 20,
    period: '01:00h',
    event_name: 'teste 2',
  },
  // ... (adicionar mais dados)
];

const LineChartExample: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={eventPerHour}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="quantity" name="Quantidade" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Gráfico de Linhas com Recharts</h1>
      <LineChartExample />
    </div>
  );
}

export default App;

