export default function Skills() {
  const skills = [
    {
      name: "Flutter Development",
      technologies: "Dart, Provider, Firebase",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128">
          <path fill="#02539A" d="M12.5 65.6L76.1 2l47.5 47.5-28.5 28.6l-19 18.9l-28.5 28.6z"/><path fill="#45D1FD" d="M76.1 2L27.9 50.3l19.1 18.9l29.1-29.1l-19.1-18.9L76.1 2z"/><path fill="#1FBCFD" d="M27.9 50.3l19.1 18.9l-19.1 18.9L8.8 69.2z"/><path fill="#02539A" d="M8.8 69.2l19.1 18.9l19.1-18.9l-19.1-18.9z"/><path fill="#45D1FD" d="M8.8 69.2l19.1 18.9l29.1-29.1l-19.1-18.9z"/><path fill="#1FBCFD" d="M47 98.9l29.1-29.1l19.1 18.9l-29.1 29.1z"/><path fill="#02539A" d="M66.1 88.1L47 98.9l19.1 18.9l19.1-18.9z"/>
        </svg>
      ),
      color: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      name: "React.js",
      technologies: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128">
          <path fill="#61DAFB" d="M64.001 82.449c-10.184 0-18.449-8.265-18.449-18.449s8.265-18.449 18.449-18.449s18.449 8.265 18.449 18.449S74.185 82.449 64.001 82.449z"/>
          <path fill="#61DAFB" d="M64.001 33.775c21.511 0 38.961 8.769 38.961 30.225s-17.45 30.225-38.961 30.225S25.04 87.511 25.04 64S42.49 33.775 64.001 33.775zm0 49.551c11.945 0 21.637-8.769 21.637-19.326s-9.692-19.326-21.637-19.326s-21.637 8.769-21.637 19.326S52.056 83.326 64.001 83.326z"/>
          <path fill="#61DAFB" d="M48.752 44.665c10.684-18.507 22.918-30.225 30.498-30.225c7.58 0 11.58 11.718 5.896 26.183c-5.684 14.465-16.368 27.83-27.052 36.548c-10.684 8.718-19.896 10.684-25.58-3.781C26.83 59.855 38.068 63.172 48.752 44.665zm15.249-15.249c-5.684 9.846-10.684 19.692-14.465 28.41c-3.781 8.718-5.896 15.249-4.735 18.507c1.161 3.258 5.161 2.322 10.845-3.781c5.684-6.103 12.215-15.249 18.507-26.183c6.292-10.934 10.292-20.78 9.131-23.323c-1.161-2.543-5.896-1.161-12.215 5.896c-6.319 7.057-13.078 15.249-17.078 20.474z"/>
          <path fill="#61DAFB" d="M79.25 44.665c-10.684-18.507-21.918-14.465-27.602 0c-5.684 14.465-5.684 37.096 5 55.603c10.684 18.507 21.918 14.465 27.602 0C89.934 81.76 89.934 63.172 79.25 44.665zm-13.9 46.354c-7.58 0-13.9-11.718-13.9-26.183s6.32-26.183 13.9-26.183s13.9 11.718 13.9 26.183S72.93 91.019 65.35 91.019z"/>
        </svg>
      ),
      color: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200"
    },
    {
      name: "ASP.NET",
      technologies: "C#, Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128">
          <path fill="#512BD4" d="M70.1 96.1c1.8 1.8 4.3 2.9 6.9 2.9c2.7 0 5.1-1.1 6.9-2.9c1.8-1.8 2.9-4.3 2.9-6.9c0-2.7-1.1-5.1-2.9-6.9c-1.8-1.8-4.3-2.9-6.9-2.9c-2.7 0-5.1 1.1-6.9 2.9c-1.8 1.8-2.9 4.3-2.9 6.9c0 2.7 1.1 5.1 2.9 6.9z"/>
          <path fill="#512BD4" d="M37.8 64.9l-9.9-9.9l9.9-9.9l9.9 9.9z"/>
          <path fill="#512BD4" d="M64 37.8l9.9-9.9l9.9 9.9l-9.9 9.9z"/>
          <path fill="#512BD4" d="M90.2 64.9l-9.9-9.9l9.9-9.9l9.9 9.9z"/>
          <path fill="#512BD4" d="M64 90.2l9.9-9.9l9.9 9.9l-9.9 9.9z"/>
          <path fill="#512BD4" d="M64 12.5L41.9 34.6L64 56.7l22.1-22.1z"/>
          <path fill="#512BD4" d="M95.4 41.9L73.3 64l22.1 22.1L117.5 64z"/>
          <path fill="#512BD4" d="M64 73.3L41.9 95.4L64 117.5l22.1-22.1z"/>
          <path fill="#512BD4" d="M32.6 41.9L10.5 64l22.1 22.1L54.7 64z"/>
        </svg>
      ),
      color: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200"
    },
    {
      name: "Flask",
      technologies: "Python, Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128">
          <path fill="#000" d="M83.9 77.2l-9.5-16.4l-9.5 16.4h19z"/>
          <path fill="#000" d="M64.9 43.8h-1.8v10.7h1.8z"/>
          <path fill="#000" d="M83.9 77.2H46.1l9.5-16.4l9.3 16.1l9.3-16.1z"/>
          <path fill="#000" d="M83.9 77.2l-9.5-16.4l-9.5 16.4h19z"/>
          <path fill="#000" d="M83.9 77.2H46.1l18.8-32.5l18.8 32.5h-1.8z"/>
        </svg>
      ),
      color: "bg-gray-50",
      textColor: "text-gray-700",
      borderColor: "border-gray-200"
    },
    {
      name: "Database Management",
      technologies: "SQL, SSMS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
        </svg>
      ),
      color: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200"
    },
    {
      name: "Programming Languages",
      technologies: "C++, Java, Python, JavaScript",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
      ),
      color: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200"
    },
    {
      name: "Version Control",
      technologies: "Git & GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25s5.146 11.5 11.5 11.5S24 18.604 24 12.25S18.854.75 12.5.75zm0 21a9.5 9.5 0 1 1 0-19a9.5 9.5 0 0 1 0 19zm-1.5-14a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-7.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"/>
        </svg>
      ),
      color: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      name: "Problem Solving",
      technologies: "DSA, OOP, Algorithms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a6.5 6.5 0 0 1-6.5 6.5H8.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h6a6.5 6.5 0 0 1 6.5 6.5zM15 7H9v10h6a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      color: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and methodologies I specialize in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${skill.color} border ${skill.borderColor}`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-lg ${skill.textColor}`}>
                  {skill.icon}
                </div>
              </div>
              <h3 className={`text-lg font-semibold text-center mb-2 ${skill.textColor}`}>
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Development Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Clean Code</h4>
              <p className="text-gray-600 text-sm">Writing maintainable and scalable code following best practices</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
              <p className="text-gray-600 text-sm">Strong analytical skills with focus on efficient algorithms</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">Experience working in team environments using Git workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}