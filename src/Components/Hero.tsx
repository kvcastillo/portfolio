import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row h-200 sm:h-screen justify-evenly items-center">
      {/* Description */}
      <div>
        <h1 className="sm:text-4xl md:text-8xl text-4xl text-green-300 text-center">
          I build full stack Web Applications.
        </h1>
        <Button size={`sm`}> Hire Me. </Button>
      </div>

      {/* Middle Divider */}
      <div className="hidden"></div>

      {/* Profile Image */}
      <div>
        <img
          src="/portfolioavatar.png"
          alt=""
          className="rounded-full  sm:w-80 md:w-100 w-50 transition-w"
        />
      </div>
    </div>
  );
};

export default Hero;
