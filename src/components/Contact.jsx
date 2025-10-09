const Contact = () => {
  return (
    <section
      id="contact"
      className="p-6 flex flex-col justify-center items-center gap-4"
    >
      <div className="relative" data-aos="fade-down" data-aos-duration="1000">
        <h2 className="text-3xl text-cyan-600 font-bold tracking-normal mb-7">
          Contact US
        </h2>
      </div>

      <form className="flex flex-col gap-4 w-full md:w-[50%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              id="name"
              className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              id="email"
              className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
          />
        </div>
        <div>
          <textarea
            name="message"
            v-model="formData.message"
            id="message"
            col="30"
            placeholder="Your Message...."
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-xl w-full h-40 bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none "
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-md  bg-cyan-600 text-white font-semibold px-1 py-2 w-40 cursor-pointer rounded-md shadow-md hover:bg-cyan-500 hover:shadow-cyan-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
