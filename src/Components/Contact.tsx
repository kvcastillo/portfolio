import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="h-200 flex justify-center mt-5 py-12 items-center flex-col ">
        <h2 className="text-4xl">Contact Me</h2>
        <h4 className="mt-2 text-center">
          If you’d like to work together or have a question, I’d be happy to
          hear from you.
        </h4>
        {/* Contact Form */}
        {/* Left Pane */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <div className="w-100 text-center">
            <div>
              <p className="text-amber-200 text-3xl">Information</p>
              <h2>
                <i>Quezon City, Philippines</i>
              </h2>
              <h2>
                <i>0977 061 4738</i>
              </h2>
              <h2>
                <i>kenzovcastillo@gmail.com</i>
              </h2>
              <p></p>
            </div>
          </div>
          {/* Right Pane*/}
          <div className=" w-150 h-60">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
