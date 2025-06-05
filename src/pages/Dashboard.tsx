import { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend, 
  ArcElement 
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('day');
  
  // Dados simulados
  const temperatureData = {
    labels: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: [22, 24, 27, 28, 25, 23],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const rainfallData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Precipitação (mm)',
        data: [120, 150, 180, 90, 60, 30, 20, 15, 40, 90, 110, 130],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  const airQualityData = {
    labels: ['Bom', 'Moderado', 'Ruim', 'Muito Ruim'],
    datasets: [
      {
        label: 'Qualidade do Ar',
        data: [40, 30, 20, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Dados Ambientais',
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 0
        }
      }
    }
  };

  return (
    <div className="py-2 sm:py-4 lg:py-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">Monitoramento Ambiental</h1>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setTimeRange('day')}
            className={`px-2 sm:px-3 py-1 text-sm rounded ${timeRange === 'day' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Dia
          </button>
          <button 
            onClick={() => setTimeRange('week')}
            className={`px-2 sm:px-3 py-1 text-sm rounded ${timeRange === 'week' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Semana
          </button>
          <button 
            onClick={() => setTimeRange('month')}
            className={`px-2 sm:px-3 py-1 text-sm rounded ${timeRange === 'month' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Mês
          </button>
          <button 
            onClick={() => setTimeRange('year')}
            className={`px-2 sm:px-3 py-1 text-sm rounded ${timeRange === 'year' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Ano
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Temperatura</h2>
          <div className="h-48 sm:h-64">
            <Line data={temperatureData} options={options} />
          </div>
          <div className="mt-3 sm:mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-xs sm:text-sm text-gray-500">Atualizado: 15 min atrás</span>
              <span className="text-xs sm:text-sm font-medium text-primary">25°C Atual</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Precipitação</h2>
          <div className="h-48 sm:h-64">
            <Bar data={rainfallData} options={options} />
          </div>
          <div className="mt-3 sm:mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-xs sm:text-sm text-gray-500">Atualizado: 30 min atrás</span>
              <span className="text-xs sm:text-sm font-medium text-primary">10mm Hoje</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Qualidade do Ar</h2>
          <div className="h-48 sm:h-64">
            <Pie data={airQualityData} options={options} />
          </div>
          <div className="mt-3 sm:mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-xs sm:text-sm text-gray-500">Atualizado: 1 hora atrás</span>
              <span className="text-xs sm:text-sm font-medium text-success">Qualidade: Boa</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Alertas Recentes</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="border-l-4 border-warning bg-warning/10 p-2 sm:p-3">
              <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                <h3 className="font-medium text-sm sm:text-base">Alerta de Chuva Forte</h3>
                <span className="text-xs sm:text-sm text-gray-500">2h atrás</span>
              </div>
              <p className="text-xs sm:text-sm mt-1">Possibilidade de chuvas intensas nas próximas 24 horas.</p>
            </div>
            <div className="border-l-4 border-success bg-success/10 p-2 sm:p-3">
              <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                <h3 className="font-medium text-sm sm:text-base">Risco de Inundação Reduzido</h3>
                <span className="text-xs sm:text-sm text-gray-500">1d atrás</span>
              </div>
              <p className="text-xs sm:text-sm mt-1">Nível dos rios voltou ao normal após período de cheia.</p>
            </div>
            <div className="border-l-4 border-primary bg-primary/10 p-2 sm:p-3">
              <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                <h3 className="font-medium text-sm sm:text-base">Monitoramento Intensificado</h3>
                <span className="text-xs sm:text-sm text-gray-500">3d atrás</span>
              </div>
              <p className="text-xs sm:text-sm mt-1">Equipes em alerta devido às previsões climáticas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 