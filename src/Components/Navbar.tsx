import { useDark } from "../hooks/useDark";
const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDark();
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    // Main Section
    <div className="flex flex-col md:flex-row items-center md:justify-around py-5 m-5 md:fixed top-0 w-screen">
      {/* Left Pane */}
      <div>
        <h4 className="text-3xl">Kenzo Castillo.</h4>
      </div>

      {/* Middle Pane */}
      <div className="flex sm:flex-row flex-col justify-between gap-5 text-xl py-5 px-5 text-[#FF0319]-300 ">
        {links.map((link, index) => (
          <button
            key={index}
            className="hover:translate-y-[-5px] duration-500 hover:text-blue-200"
          >
            {link}
          </button>
        ))}
        <button onClick={toggleDarkMode}>{isDarkMode ? "🔦" : "🌑"}</button>
      </div>

      {/* Right Pane */}
      <div className=" flex gap-5 p-5 border-2 rounded-full">
        <h6>
          <a
            href="https://www.linkedin.com/in/ken-castillo-64901a373/"
            target="_blank"
          >
            Linkedin
          </a>
        </h6>
        <h6>
          <a href="https://github.com/kvcastillo" target="_blank">
            Github
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Navbar;
