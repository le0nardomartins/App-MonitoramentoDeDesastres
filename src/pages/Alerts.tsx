import { useState } from 'react';

const Alerts = () => {
  const [alertType, setAlertType] = useState<string>('all');
  
  // Dados simulados
  const activeAlerts = [
    {
      id: 1,
      type: 'flood',
      title: 'Alerta de Enchente',
      description: 'Possibilidade de inundações nas áreas ribeirinhas do Rio Tietê devido às chuvas intensas.',
      level: 'high', // high, medium, low
      region: 'Zona Leste - São Paulo',
      timestamp: new Date().toISOString(),
      expectedDuration: '48 horas'
    },
    {
      id: 2,
      type: 'landslide',
      title: 'Risco de Deslizamento',
      description: 'Risco de deslizamentos em encostas devido à saturação do solo após 5 dias de chuvas.',
      level: 'high',
      region: 'Serra do Mar - Região Sul',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 horas atrás
      expectedDuration: '72 horas'
    },
    {
      id: 3,
      type: 'storm',
      title: 'Tempestade Prevista',
      description: 'Previsão de tempestade com ventos fortes e chuvas intensas nas próximas horas.',
      level: 'medium',
      region: 'Região Metropolitana',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 horas atrás
      expectedDuration: '24 horas'
    }
  ];

  const recentAlerts = [
    {
      id: 4,
      type: 'flood',
      title: 'Alerta de Enchente Encerrado',
      description: 'Nível dos rios normalizou após período de chuvas.',
      level: 'low',
      region: 'Vale do Paraíba',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 dias atrás
      status: 'resolved'
    },
    {
      id: 5,
      type: 'drought',
      title: 'Alerta de Seca',
      description: 'Baixos níveis dos reservatórios devido à falta de chuvas nos últimos meses.',
      level: 'medium',
      region: 'Região Nordeste',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 dias atrás
      status: 'active'
    }
  ];

  const getAlertColorClass = (level: string) => {
    switch (level) {
      case 'high':
        return 'border-danger bg-danger/10 text-danger';
      case 'medium':
        return 'border-warning bg-warning/10 text-warning';
      case 'low':
        return 'border-success bg-success/10 text-success';
      default:
        return 'border-gray-300 bg-gray-50 text-gray-500';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'flood':
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'landslide':
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        );
      case 'storm':
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'drought':
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredActiveAlerts = alertType === 'all'
    ? activeAlerts
    : activeAlerts.filter(alert => alert.type === alertType);

  const filteredRecentAlerts = alertType === 'all'
    ? recentAlerts
    : recentAlerts.filter(alert => alert.type === alertType);

  return (
    <div className="py-2 sm:py-4 lg:py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Sistema de Alertas</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Monitore alertas ativos e recentes de desastres naturais como enchentes, deslizamentos e tempestades.
        </p>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex items-center">
          <div className="bg-danger/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-gray-500">Alertas Ativos</p>
            <p className="text-lg sm:text-xl font-semibold">{activeAlerts.length}</p>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex items-center">
          <div className="bg-warning/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-gray-500">Risco de Enchentes</p>
            <p className="text-lg sm:text-xl font-semibold">2</p>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex items-center">
          <div className="bg-danger/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-gray-500">Risco de Deslizamentos</p>
            <p className="text-lg sm:text-xl font-semibold">1</p>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex items-center">
          <div className="bg-warning/10 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-gray-500">Tempestades</p>
            <p className="text-lg sm:text-xl font-semibold">1</p>
          </div>
        </div>
      </div>

      {/* Filtro */}
      <div className="flex overflow-x-auto pb-4 mb-4 sm:mb-6 space-x-2 scrollbar-hide">
        <button
          onClick={() => setAlertType('all')}
          className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
            alertType === 'all' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setAlertType('flood')}
          className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
            alertType === 'flood' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Enchentes
        </button>
        <button
          onClick={() => setAlertType('landslide')}
          className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
            alertType === 'landslide' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Deslizamentos
        </button>
        <button
          onClick={() => setAlertType('storm')}
          className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
            alertType === 'storm' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Tempestades
        </button>
        <button
          onClick={() => setAlertType('drought')}
          className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
            alertType === 'drought' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Secas
        </button>
      </div>

      {/* Alertas Ativos */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Alertas Ativos</h2>
        <div className="space-y-3 sm:space-y-4">
          {filteredActiveAlerts.map(alert => (
            <div key={alert.id} className={`border-l-4 p-3 sm:p-4 rounded-r-lg ${getAlertColorClass(alert.level)}`}>
              <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-bold text-base sm:text-lg">{alert.title}</h3>
                    <span className="text-xs sm:text-sm font-medium bg-white/50 px-2 py-1 rounded mt-1 sm:mt-0">
                      {alert.level === 'high' ? 'Alto Risco' : alert.level === 'medium' ? 'Médio Risco' : 'Baixo Risco'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-2">{alert.description}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs space-y-1 sm:space-y-0">
                    <span><strong>Região:</strong> {alert.region}</span>
                    <span><strong>Duração esperada:</strong> {alert.expectedDuration}</span>
                    <span><strong>Emitido em:</strong> {formatDate(alert.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Histórico de Alertas */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Alertas Recentes</h2>
        <div className="space-y-3 sm:space-y-4">
          {filteredRecentAlerts.map(alert => (
            <div key={alert.id} className={`border-l-4 p-3 sm:p-4 rounded-r-lg ${getAlertColorClass(alert.level)} opacity-75`}>
              <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-bold text-base sm:text-lg">{alert.title}</h3>
                    <span className="text-xs sm:text-sm font-medium bg-white/50 px-2 py-1 rounded mt-1 sm:mt-0">
                      {alert.status === 'resolved' ? 'Resolvido' : 'Ativo'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-2">{alert.description}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs space-y-1 sm:space-y-0">
                    <span><strong>Região:</strong> {alert.region}</span>
                    <span><strong>Data:</strong> {formatDate(alert.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações de Segurança */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Informações de Segurança</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg mb-2">Antes de um Desastre</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mantenha um kit de emergência preparado
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Conheça as rotas de evacuação
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tenha um plano familiar de emergência
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg mb-2">Durante um Desastre</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-warning mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Mantenha a calma e siga as orientações
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-warning mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Evite áreas de risco e aguarde orientações
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-warning mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Desligue a eletricidade se houver risco
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg mb-2">Após um Desastre</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verifique se há feridos e preste socorro
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Não retorne para áreas afetadas sem autorização
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Reporte danos às autoridades competentes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts; 