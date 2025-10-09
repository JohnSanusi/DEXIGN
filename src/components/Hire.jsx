import React, { useState } from "react";

const Hire = () => {
  const [formData, setFormData] = useState({
    plan: "",
    name: "",
    email: "",
    phone: "",
    webtype: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("https://dexign-backend.onrender.com/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          plan: "",
          name: "",
          email: "",
          phone: "",
          webtype: "",
          description: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hire" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-cyan-600 font-bold text-center mb-3">
          Hire Us
        </h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Select a plan, tell us what you need, and let’s get started.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl text-gray-500 font-semibold mb-4">
              Choose a Plan
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* STARTER PLAN */}
              <label
                className={`relative bg-gray-900 rounded-lg p-4 shadow-md border ${
                  formData.plan === "Starter"
                    ? "border-cyan-500"
                    : "border-white/10"
                } cursor-pointer`}
              >
                <input
                  type="radio"
                  name="plan"
                  value="Starter"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="font-bold text-white">
                  Starter — ₦100,000+
                </span>
                <span className="absolute top-2 right-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  -10%
                </span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>1–3 page site</li>
                  <li>Contact form or WhatsApp</li>
                  <li>Delivered in 5–7 days</li>
                </ul>
              </label>

              {/* MEDIUM PLAN */}
              <label
                className={`bg-gray-900 rounded-lg p-4 shadow-md border ${
                  formData.plan === "Medium"
                    ? "border-cyan-500"
                    : "border-white/10"
                } cursor-pointer`}
              >
                <input
                  type="radio"
                  name="plan"
                  value="Medium"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="font-bold text-white">
                  Medium — ₦200,000+
                </span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>4–6 pages + dashboard</li>
                  <li>Custom design</li>
                  <li>7–10 days delivery</li>
                </ul>
              </label>

              {/* PREMIUM PLAN */}
              <label
                className={`bg-gray-900 rounded-lg p-4 shadow-md border ${
                  formData.plan === "Premium"
                    ? "border-cyan-500"
                    : "border-white/10"
                } cursor-pointer`}
              >
                <input
                  type="radio"
                  name="plan"
                  value="Premium"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="font-bold text-white">
                  Premium — ₦400,000+
                </span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>Full site + backend</li>
                  <li>Payments, SEO, dashboard</li>
                  <li>10–15 days delivery</li>
                </ul>
              </label>
            </div>
          </div>

          {/* FORM INPUTS */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,211,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,211,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,211,238,0.7)] focus:outline-none"
            required
          />
          <select
            name="webtype"
            value={formData.webtype}
            onChange={handleChange}
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,211,238,0.7)] focus:outline-none"
            required
          >
            <option value="" disabled>
              Type of website
            </option>
            <option>Portfolio</option>
            <option>Company</option>
            <option>E-commerce</option>
            <option>Blog</option>
            <option>Landing Page</option>
          </select>
          <textarea
            name="description"
            placeholder="Project Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="md:col-span-2 border border-white/20 py-2.5 px-4 font-light text-base rounded-2xl w-full bg-gray-900 backdrop-blur-sm focus:shadow-[0_0_9px_rgba(34,211,238,0.7)] focus:outline-none"
            required
          ></textarea>

          {/* ALERT MESSAGES */}
          {status === "success" && (
            <div className="md:col-span-2 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
               Request submitted successfully! We’ll reach out soon.
            </div>
          )}
          {status === "error" && (
            <div className="md:col-span-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
               Something went wrong. Please try again.
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-md bg-cyan-600 text-white font-semibold px-1 py-2 w-40 cursor-pointer rounded-md shadow-md hover:bg-cyan-500 hover:shadow-cyan-600 transition disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hire;
