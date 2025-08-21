import { useState, useEffect } from 'react';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // List of available screenshots for the Chatbot project
  const chatbotScreenshots = [
    "2.png", "3.png", "4.png", "5.png", "7.png", "9.png", 
    "9(1).png", "10.png", "11.png", "12.png", "13.png", 
    "14.png", "15.png", "16.png", "17.png", "18.png", 
    "19.png", "20.png", "21.png", "22.png", "23_.png", "24.png"
  ];
  
  const projects = [
    {
      title: "Chatbot using WhatsApp History",
      desc: "Context-aware chatbot for education domain that utilizes WhatsApp chat history.",
      fullDesc: "Developed an innovative chatbot that leverages WhatsApp chat history to provide personalized, context-aware customer support. By analyzing past interactions, it resolves queries faster, enhances user satisfaction, and streamlines communication between applicants and institutions.",
      technologies: ["Flutter", "Flask (Python)", "SQL", "Machine Learning", "BERT", "WhatsApp API"],
      features: [
        "Context-aware responses based on historical interactions",
        "Admin dashboard with chat history and analytics",
        "Session management for different academic periods",
        "Visual query analysis across multiple sessions",
        "Automated response system for common queries",
        "Multi-session comparison with graphical reports"
      ],
      category: "Full Stack AI Solution",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
      accentColor: "bg-gradient-to-r from-blue-600 to-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      screenshots: chatbotScreenshots,
      hasScreenshots: true
    },
    {
      title: "Travel Agency App",
      desc: "Mobile application for managing travel agency operations.",
      fullDesc: "Built a comprehensive mobile application for travel agency management with features for adding drivers, managing expenses, bus fleet management, and customer relations using Flutter with Provider state management.",
      technologies: ["Flutter", "Dart", "SQLite", "Provider", "REST API", "ASP.NET"],
      features: [
        "Driver and vehicle management system",
        "Expense tracking and financial reporting",
        "Booking system with customer management",
        "Real-time bus tracking integration",
        "Admin dashboard for operations monitoring",
        "Multi-role authentication system"
      ],
      category: "Mobile Development",
      color: "bg-gradient-to-br from-emerald-50 to-green-50",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-300",
      accentColor: "bg-gradient-to-r from-emerald-600 to-green-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      screenshots: [],
      hasScreenshots: false
    },
    {
      title: "Parking Management System",
      desc: "C# Windows Forms application for parking management.",
      fullDesc: "Developed a secure and user-friendly Parking Management System with database integration for efficient management of parking slots, customer registrations, and payment processing.",
      technologies: ["C#", "Windows Forms", "SQL Server", "ADO.NET", "Crystal Reports", "Payment Integration"],
      features: [
        "Customer registration and management portal",
        "Parking slot allocation and reservation system",
        "Payment processing integration with multiple methods",
        "Reporting and analytics dashboard with Crystal Reports",
        "Security and access control system",
        "Real-time parking availability tracking"
      ],
      category: "Desktop Application",
      color: "bg-gradient-to-br from-purple-50 to-violet-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
      accentColor: "bg-gradient-to-r from-purple-600 to-violet-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      screenshots: [],
      hasScreenshots: false
    },
    {
      title: "Recipe Management System",
      desc: "Windows application for managing and sharing recipes.",
      fullDesc: "Developed a comprehensive Recipe Management System that allows users to browse, add, and manage recipes with admin functionality for content moderation and user management.",
      technologies: ["C#", "Windows Forms", "SQL Server", "Entity Framework", "LINQ", "Reporting Services"],
      features: [
        "Recipe browsing and advanced search functionality",
        "User registration and authentication system",
        "Admin panel for content management and moderation",
        "Categorization and tagging system with filters",
        "Rating and review system for recipes",
        "Meal planning and shopping list generation"
      ],
      category: "Desktop Application",
      color: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-amber-800",
      borderColor: "border-amber-300",
      accentColor: "bg-gradient-to-r from-amber-600 to-orange-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      screenshots: [],
      hasScreenshots: false
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projects.length]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Featured <span className="text-indigo-600">Projects</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl mb-16 border border-gray-200">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`${project.color} p-8 md:p-12 h-full`}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                      <span className={`inline-block px-4 py-2 text-sm font-semibold ${project.textColor} bg-white rounded-full mb-6 shadow-sm`}>
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.desc}</p>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <span className={`w-3 h-3 rounded-full ${project.accentColor} mr-2`}></span>
                          Key Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span 
                              key={i} 
                              className={`px-3 py-1 text-sm font-medium text-white rounded-full ${project.accentColor} shadow-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className={`px-3 py-1 text-sm font-medium ${project.textColor} bg-white rounded-full border ${project.borderColor}`}>
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => openModal(project)}
                        className={`px-6 py-3 rounded-lg font-medium text-white ${project.accentColor} hover:shadow-lg transition-all duration-300 flex items-center`}
                      >
                        View Project Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="w-72 h-72 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-6 border border-white">
                          <div className="text-center">
                            <div className={`w-20 h-20 ${project.accentColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}>
                              {project.icon}
                            </div>
                            <p className="text-gray-700 font-medium mb-2">
                              {project.hasScreenshots ? `${project.screenshots.length} Screenshots Available` : "Live Demo Available"}
                            </p>
                            <p className="text-sm text-gray-500">Click view details to explore features</p>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className={`absolute -top-6 -right-6 w-24 h-24 ${project.accentColor} opacity-20 rounded-full`}></div>
                        <div className={`absolute -bottom-6 -left-6 w-20 h-20 ${project.accentColor} opacity-20 rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + projects.length) % projects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-50 group"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % projects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-50 group"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border ${project.borderColor} ${project.color} cursor-pointer group`}
                onClick={() => openModal(project)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${project.accentColor} text-white shadow-md`}>
                    {project.icon}
                  </div>
                  <span className={`px-4 py-1 text-xs font-semibold ${project.textColor} bg-white rounded-full border ${project.borderColor}`}>
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                <p className="text-gray-600 mb-5 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-xs font-medium text-white rounded-full ${project.accentColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 text-xs font-medium ${project.textColor} bg-white rounded-full border ${project.borderColor}`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${project.textColor}`}>
                    {project.hasScreenshots ? `${project.screenshots.length} screenshots` : "Demo available"}
                  </span>
                  <button className={`px-4 py-2 rounded-lg font-medium text-white ${project.accentColor} hover:shadow-lg transition-all duration-300 flex items-center group-hover:scale-105`}>
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            <div className={`p-8 ${selectedProject.color} rounded-t-2xl`}>
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-2 text-sm font-semibold ${selectedProject.textColor} bg-white rounded-full`}>
                  {selectedProject.category}
                </span>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-white hover:bg-opacity-30 transition-colors"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
            </div>
            
            <div className="p-8">
              {/* Project Overview Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className={`w-4 h-4 rounded-full ${selectedProject.accentColor} mr-3`}></span>
                  Project Overview
                </h4>
                <div className={`p-6 rounded-lg shadow-md ${selectedProject.color} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start">
                    <div className={`p-3 rounded-xl ${selectedProject.accentColor} text-white mr-4 flex-shrink-0`}>
                      {selectedProject.icon}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.fullDesc}</p>
                  </div>
                </div>
              </div>

              <hr className={`my-6 border-t-2 ${selectedProject.borderColor}`} />

              {/* Key Features Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className={`w-4 h-4 rounded-full ${selectedProject.accentColor} mr-3`}></span>
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className={`p-4 rounded-lg shadow-md ${selectedProject.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${selectedProject.textColor} mt-0.5 mr-3 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className={`my-6 border-t-2 ${selectedProject.borderColor}`} />

              {/* Technologies Used Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className={`w-4 h-4 rounded-full ${selectedProject.accentColor} mr-3`}></span>
                  Technologies Used
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.technologies.map((tech, i) => (
                    <div key={i} className={`p-4 rounded-lg shadow-md ${selectedProject.accentColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span className="text-white text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className={`my-6 border-t-2 ${selectedProject.borderColor}`} />

              {/* Project Status Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className={`w-4 h-4 rounded-full ${selectedProject.accentColor} mr-3`}></span>
                  Project Status
                </h4>
                <div className={`p-4 rounded-lg shadow-md ${selectedProject.color} hover:shadow-lg transition-all duration-300 flex items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${selectedProject.textColor} mr-3 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-gray-700 font-medium">Status: </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${selectedProject.accentColor}`}>Completed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-8">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}