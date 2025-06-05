import React, { useState } from 'react';

const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'prevention', name: 'Prevenção' },
    { id: 'preparation', name: 'Preparação' },
    { id: 'response', name: 'Resposta' },
    { id: 'recovery', name: 'Recuperação' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Prevenção de Enchentes',
      description: 'Aprenda como identificar áreas de risco e prevenir enchentes em sua comunidade.',
      level: 'Iniciante',
      duration: '2 horas',
      category: 'prevention',
      image: 'https://images.pexels.com/photos/1756338/pexels-photo-1756338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 2,
      title: 'Preparação para Deslizamentos',
      description: 'Como identificar sinais de deslizamentos de terra e preparar sua família.',
      level: 'Intermediário',
      duration: '3 horas',
      category: 'preparation',
      image: 'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 3,
      title: 'Resposta a Emergências',
      description: 'Técnicas de primeiros socorros e resgate em situações de desastres naturais.',
      level: 'Avançado',
      duration: '4 horas',
      category: 'response',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 4,
      title: 'Recuperação Pós-Desastre',
      description: 'Estratégias para reconstrução e recuperação de comunidades após desastres.',
      level: 'Intermediário',
      duration: '3 horas',
      category: 'recovery',
      image: 'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 5,
      title: 'Monitoramento Climático',
      description: 'Como interpretar dados climáticos e identificar padrões de risco.',
      level: 'Avançado',
      duration: '5 horas',
      category: 'prevention',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 6,
      title: 'Plano de Emergência Familiar',
      description: 'Como criar um plano de emergência eficaz para sua família.',
      level: 'Iniciante',
      duration: '2 horas',
      category: 'preparation',
      image: 'https://images.pexels.com/photos/7821579/pexels-photo-7821579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="py-2 sm:py-4 lg:py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Treinamento e Capacitação</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Acesse cursos e materiais educativos para prevenção e resposta a desastres naturais.
        </p>
      </div>

      {/* Categorias */}
      <div className="flex overflow-x-auto pb-4 mb-4 sm:mb-6 space-x-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 sm:px-4 py-2 text-sm rounded-full whitespace-nowrap flex-shrink-0 ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{course.description}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                  {course.level}
                </span>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded transition text-sm">
                Acessar Curso
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recursos Adicionais */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Recursos Adicionais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <a href="#" className="bg-white p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <div className="min-w-0">
                <h3 className="font-medium text-sm sm:text-base">Guias e Manuais</h3>
                <p className="text-xs sm:text-sm text-gray-600">Documentos técnicos para prevenção</p>
              </div>
            </div>
          </a>
          <a href="#" className="bg-white p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <div className="min-w-0">
                <h3 className="font-medium text-sm sm:text-base">Webinars</h3>
                <p className="text-xs sm:text-sm text-gray-600">Palestras e workshops online</p>
              </div>
            </div>
          </a>
          <a href="#" className="bg-white p-3 sm:p-4 rounded-lg shadow hover:shadow-md transition sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div className="min-w-0">
                <h3 className="font-medium text-sm sm:text-base">Templates</h3>
                <p className="text-xs sm:text-sm text-gray-600">Modelos de planos de emergência</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training; 