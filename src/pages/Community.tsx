import { useState } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // Dados simulados
  const projects = [
    {
      id: 1,
      title: 'Mapeamento de Áreas de Risco',
      description: 'Projeto comunitário para mapear áreas suscetíveis a deslizamentos e enchentes na região sudeste.',
      members: 24,
      progress: 65,
      tags: ['mapeamento', 'prevenção', 'comunidade']
    },
    {
      id: 2,
      title: 'Rede de Sensores Comunitários',
      description: 'Desenvolvimento de uma rede de sensores de baixo custo para monitoramento pluviométrico em áreas vulneráveis.',
      members: 17,
      progress: 80,
      tags: ['iot', 'sensores', 'tecnologia']
    },
    {
      id: 3,
      title: 'Programa de Educação Ambiental',
      description: 'Programa educativo para escolas sobre prevenção de desastres naturais e meio ambiente.',
      members: 32,
      progress: 45,
      tags: ['educação', 'escolas', 'prevenção']
    }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Eficácia dos alertas via SMS',
      author: 'Carolina Silva',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '2 dias atrás',
      comments: 28,
      likes: 42
    },
    {
      id: 2,
      title: 'Integração de dados meteorológicos com IA',
      author: 'Pedro Almeida',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '4 dias atrás',
      comments: 15,
      likes: 37
    },
    {
      id: 3,
      title: 'Experiências com sensores de movimento em encostas',
      author: 'Amanda Costa',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      date: '1 semana atrás',
      comments: 43,
      likes: 86
    },
    {
      id: 4,
      title: 'Planos de evacuação para comunidades ribeirinhas',
      author: 'Rafael Monteiro',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      date: '1 semana atrás',
      comments: 19,
      likes: 31
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Workshop: Construção de Pluviômetros Caseiros',
      date: '15 de Julho, 2024',
      time: '14:00 - 17:00',
      location: 'Centro Comunitário Vila Verde',
      attendees: 45
    },
    {
      id: 2,
      title: 'Hackathon: Soluções Tecnológicas para Prevenção',
      date: '22-24 de Agosto, 2024',
      time: 'Evento de 48 horas',
      location: 'Campus Universitário',
      attendees: 120
    },
    {
      id: 3,
      title: 'Seminário: Políticas Públicas para Prevenção de Desastres',
      date: '10 de Setembro, 2024',
      time: '09:00 - 18:00',
      location: 'Auditório Municipal',
      attendees: 85
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-2 sm:space-y-0">
                  <h3 className="font-bold text-base sm:text-lg line-clamp-2">{project.title}</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {project.members} participantes
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                <div className="mb-3 sm:mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm">Progresso</span>
                    <span className="text-xs sm:text-sm font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                    <div 
                      className="bg-primary h-2 sm:h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded transition text-sm">
                  Participar
                </button>
              </div>
            ))}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="font-medium text-base sm:text-lg mb-1">Inicie um novo projeto</h3>
              <p className="text-gray-500 text-sm mb-3 sm:mb-4">Compartilhe sua ideia com a comunidade</p>
              <button className="bg-white hover:bg-gray-100 text-primary border border-primary px-3 sm:px-4 py-2 rounded transition text-sm">
                Criar Projeto
              </button>
            </div>
          </div>
        );
      case 'discussions':
        return (
          <>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0">
              <h3 className="font-semibold text-base sm:text-lg">Discussões recentes</h3>
              <button className="bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-2 rounded-lg flex items-center text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Novo Tópico
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {discussions.map(discussion => (
                <div key={discussion.id} className="bg-white rounded-lg shadow p-3 sm:p-4">
                  <div className="flex items-start space-x-3">
                    <img 
                      src={discussion.avatar} 
                      alt={discussion.author} 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-2">{discussion.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 space-y-1 sm:space-y-0">
                        <span>{discussion.author}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span>{discussion.date}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm space-y-1 sm:space-y-0">
                        <div className="flex items-center text-gray-500">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {discussion.comments} comentários
                        </div>
                        <div className="flex items-center text-gray-500">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {discussion.likes} curtidas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 'events':
        return (
          <div className="space-y-4 sm:space-y-6">
            {events.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-3 lg:space-y-0">
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-2">{event.title}</h3>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{event.attendees} participantes confirmados</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2">
                    <button className="bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-2 rounded transition text-sm">
                      Participar
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-primary border border-primary px-3 sm:px-4 py-2 rounded transition text-sm">
                      Mais Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-2 sm:py-4 lg:py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Comunidade</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Conecte-se com outros membros, participe de projetos colaborativos e compartilhe conhecimento.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 mb-4 sm:mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-3 sm:px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'projects'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Projetos
        </button>
        <button
          onClick={() => setActiveTab('discussions')}
          className={`px-3 sm:px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'discussions'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Discussões
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-3 sm:px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'events'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Eventos
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Community; 