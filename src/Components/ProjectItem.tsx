type ProjectItemProp = {
  project: {
    name: string;
    src: string;
    vercel: string;
    github: string;
  };
};
const ProjectItem = ({ project }: ProjectItemProp) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:justify-evenly w-100">
        <h3 className="text-xl">{project.name}</h3>

        <img src={project.src} className="w-80 h-40 object-cover" />
        <div className="flex gap-10">
          <button className="">
            <a href={project.vercel} target="_blank">
              Visit Site
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
