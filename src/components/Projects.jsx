import React from "react";
const projects = [
  {
    id: 1,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "Todos",
    demo_link: "#",
    git_link: "#",
  },
  {
    id: 2,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "e-com",
    demo_link: "#",
    git_link: "#",
  },
  {
    id: 3,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "bg-changer",
    demo_link: "#",
    git_link: "#",
  },
 
  
];

function Projects() {
  return (
    <>
    <div id="projects" className="w-full h-12"></div>
  
    <div className="bg-gradient-to-bl from-blue-100 to-violet-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.img}
                alt={project.project_name}
                className="w-full h-52 object-cover"
              />
  
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {project.project_name}
                </h3>
  
                <div className="flex justify-center gap-4">
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
  
                  <a
                    href={project.git_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default Projects;
