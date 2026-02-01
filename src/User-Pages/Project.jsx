import { Projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <>
      <div className="w-full mt-10 text-center lg:mt-7">
        <h1 className="text-3xl font-semibold lg:text-7xl text-[#fcffff]">
          Projects
        </h1>
        <div className="flex items-center lg:space-x-6 lg:ml-[50%] lg:mt-15">
          <div className="gap-1.5 relative flex ml-[50%] lg:ml-0 flex-col lg:items-center lg:gap-1.5">
            <div className="mt-3 lg:mt-0 w-1 h-10 lg:w-1 lg:h-17 bg-[#fb715e] "></div>
            <div className="w-2 h-2 lg:w-4 lg:h-4 bg-[#fb715e] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full lg:flex lg:flex-row lg:flex-wrap lg:min-h-screen lg:justify-around lg:w-300 lg:mt-7 lg:ml-40 ">
        {/* loop yha se start hoga */}
        {Projects.map((project) => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </div>
    </>
  );
}
