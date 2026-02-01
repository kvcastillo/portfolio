import ProjectItem from "./ProjectItem";

const Project = () => {
  const projects = [
    {
      name: "TrackerList",
      src: "/crud.png",
      vercel: "https://my-crud-app-umber.vercel.app/",
      github: "",
    },
    {
      name: "SwiftCart",
      src: "/swiftcart.png",
      vercel: "https://swiftcart-project-ecru.vercel.app/",
      github: "",
    },
  ];
  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center">
        <h3 className="text-5xl pt-24">My Latest Work</h3>
        <h5 className="w-100 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias
          aliquid, delectus, quis commodi sequi quas libero tempora doloribus ea
          magni animi quisquam eius illo eligendi molestiae iusto vitae natus.
        </h5>
      </div>
      {/* Project Section */}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 py-12">
        {projects.map((project) => (
          <>
            <ProjectItem project={project} />
          </>
        ))}
      </div>
    </>
  );
};

export default Project;
