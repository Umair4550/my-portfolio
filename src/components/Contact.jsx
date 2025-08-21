import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-indigo-600 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm open to freelance opportunities and excited to collaborate on innovative projects. 
            Reach out to discuss how I can contribute to your vision.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:mumairpersonal@gmail.com" className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold transition-colors">mumairpersonal@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a href="tel:03029855708" className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold transition-colors">0302 9855708</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-800 text-lg font-semibold">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://github.com/umair4550" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-indigo-700">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-gray-700 group-hover:text-indigo-700 font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/muhammad-umair-110252305/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 group-hover:text-blue-800">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-gray-700 group-hover:text-blue-800 font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://wa.me/923029855708" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-xl hover:-translate-y-1 hover:border-green-400 hover:bg-green-50 transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 group-hover:text-green-700">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.627 0-12.018 5.392-12.02 12.019 0 2.175.57 4.293 1.646 6.134l-1.108 4.058 4.177-1.096c1.745 1.021 3.727 1.563 5.761 1.563h.006c6.624 0 12.015-5.389 12.017-12.018.002-3.21-1.246-6.226-3.515-8.486"/>
                  </svg>
                  <span className="text-gray-700 group-hover:text-green-700 font-medium">WhatsApp</span>
                </a>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-indigo-50 border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 group-hover:text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-indigo-800 font-medium">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
          }
          50% {
            box-shadow: 0 0 10px 5px rgba(79, 70, 229, 0.2);
          }
        }
        .hover\:shadow-xl:hover {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}