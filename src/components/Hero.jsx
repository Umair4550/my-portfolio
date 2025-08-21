import { useState, useEffect } from 'react';

export default function Hero() {
  const [isHireHovered, setIsHireHovered] = useState(false);
  
  const downloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/M Umair latest cv.pdf';
    link.download = 'Muhammad_Umair_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hireMe = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation for floating elements
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const delay = index * 200;
        setTimeout(() => {
          element.classList.add('animate-float');
        }, delay);
      });
    };

    animateElements();
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 text-white overflow-hidden" id="home">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      </div>
      
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block px-3 py-1 mb-6 text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="flex items-center">
              <span className="flex w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Available for new projects
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Muhammad Umair</span> 👋
          </h1>
          
          <p className="text-lg md:text-xl text-indigo-100 max-w-xl mb-8">
            A passionate BSCS graduate skilled in <span className="font-semibold text-white">Flutter</span>,  <span className="font-semibold text-white">ASP.NET</span>, <span className="font-semibold text-white">Flask</span>, and database management. 
            I build scalable mobile and web applications with strong backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={downloadCV}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-indigo-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-amber-400 hover:to-amber-500 flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 极a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={hireMe}
              onMouseEnter={() => setIsHireHovered(true)}
              onMouseLeave={() => setIsHireHovered(false)}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Hire Me
              </span>
             <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
              {/* Animated ring effect on hover */}
              {isHireHovered && (
                <div className="absolute inset-0 rounded-lg border-2 border-green-400 animate-ping opacity-75"></div>
              )}
            </button>
          </div>
          
         
        </div>
        
        {/* Profile Image */}
        <div className="md:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-1.5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-75 animate-pulse"></div>
              <img 
                src="public\profile.png" 
                alt="Muhammad Umair" 
                className="w-full h-full rounded-full object-cover border-4 border-indigo-900 relative z-10" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%234f46e5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='20' fill='white'%3EProfile%3C/text%3E%3C/svg%3E"
                }}
              />
              
                   </div>
            
            {/* Animated decorative elements around profile image */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-amber-400/20 rounded-full floating-element"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400/20 rounded-full floating-element" style={{animationDelay: '0.5s'}}></div>
            
            {/* Floating tech badges with animation */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 floating-element" style={{animationDelay: '1s'}}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 floating-element" style={{animationDelay: '1.5s'}}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 极 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(3deg);
          }
          66% {
            transform: translateY(5px) rotate(-3deg);
          }
        }
        .floating-element {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        .animate-float {
          opacity: 1;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}