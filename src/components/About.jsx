export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know my professional background and expertise
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Crafting Digital Solutions With Precision
              </h3>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-center md:text-left mb-8">
                A dedicated Bachelor of Computer Science (BSCS) graduate, eager to apply technical skills and 
                problem-solving abilities in software development. My expertise lies in mobile app development 
                using Flutter (with Provider state management), backend systems with Flask & ASP.NET, and 
                database management. I aim to build efficient and scalable real-world solutions.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                <p className="text-indigo-700 font-medium flex items-center">
                  <span className="flex w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Currently available for new projects and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}