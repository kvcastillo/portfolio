import Button from "./Button";

const Form = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center text-center">
      <div className="flex">
        <input
          type="text"
          className="contact-input mr-2"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
        />
      </div>
      <input
        type="text"
        className="border w-100 h-10 my-5"
        placeholder="Subject"
      />
      <textarea className="border w-100 h-40" placeholder="Your Message" />
      <Button size="md">Send Message.</Button>
    </div>
  );
};

export default Form;
