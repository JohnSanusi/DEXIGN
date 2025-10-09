import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false });

    try {
      const response = await fetch("https://dexign-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      setAlert({
        show: true,
        type: "success",
        message: " Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "Failed to send message. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-cyan-600 font-bold text-center mb-3">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Drop us a message.
        </p>

        {/* Alert */}
        {alert.show && (
          <div
            className={`text-center mb-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              alert.type === "success"
                ? "bg-green-600/20 text-green-400 border border-green-500 animate-fade-in"
                : "bg-red-600/20 text-red-400 border border-red-500 animate-fade-in"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="md:col-span-2 border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="md:col-span-2 border border-white/20 py-2.5 px-4 font-light text-base rounded-2xl w-full bg-gray-900 focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`text-md font-semibold px-1 py-2 w-40 rounded-md shadow-md transition ${
              loading
                ? "bg-cyan-800 text-gray-300 cursor-not-allowed"
                : "bg-cyan-600 text-white hover:bg-cyan-500 hover:shadow-cyan-600 cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
