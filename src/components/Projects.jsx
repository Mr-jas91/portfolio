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
  {
    id: 4,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "store",
    demo_link: "#",
    git_link: "#",
  },
  {
    id: 5,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "redux",
    demo_link: "#",
    git_link: "#",
  },
  {
    id: 6,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "api",
    demo_link: "#",
    git_link: "#",
  },
  {
    id: 7,
    img: "https://placehold.co/300x200/d1d4ff/352cb5.png",
    project_name: "pure html",
    demo_link: "#",
    git_link: "#",
  },
];

function Projects() {
  return (
    <>
      <div id="projects" className=" w-full h-10"></div>
      <div className="bg-gradient-to-bl from-blue-50 to-violet-50 items-center justify-center border mx-4 my-8">
        <div className="container mx-auto p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 overflow-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg border p-4 border-black mx-auto"
              >
                <img
                  src={project.img}
                  alt="project"
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-2">
                  <div className="font-bold text-xl mb-2 text-center">
                    {project.project_name}
                  </div>
                </div>
                <div className="px-1 py-2 flex justify-between">
                  <a
                    href={project.demo_link}
                    className="text-black text-xl font-bold hover:underline border border-black rounded-full p-2"
                  >
                    Live demo
                  </a>
                  <a
                    href={project.git_link}
                    className="text-black text-xl font-bold hover:underline border border-black rounded-full p-2"
                  >
                    Github link
                  </a>
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
