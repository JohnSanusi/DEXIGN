import React from "react";

const Hire = () => {
  return (
    <section id="hire" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-cyan-600 font-bold text-center mb-3">
          Hire Us
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Select a plan, tell us what you need, and let’s get started.
        </p>

        <form className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl text-gray-500 font-semibold mb-4">
              Choose a Plan
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="bg-gray-900 rounded-lg p-4 shadow-md border border-white/10 backdrop-blur-sm cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="Starter"
                  className="mr-2"
                  required
                />
                <span className="font-bold ">Starter — ₦100,000+</span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>1–3 page site</li>
                  <li>Contact form or WhatsApp</li>
                  <li>Delivered in 5–7 days</li>
                </ul>
              </label>
              <label className="bg-gray-900 rounded-lg p-4 shadow-md border border-white/10 backdrop-blur-sm cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="Medium"
                  className="mr-2"
                  required
                />
                <span className="font-bold">Medium — ₦200,000+</span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>4–6 pages + dashboard</li>
                  <li>Custom design</li>
                  <li>7–10 days delivery</li>
                </ul>
              </label>
              <label className="bg-gray-900 rounded-lg p-4 shadow-md border border-white/10 backdrop-blur-sm cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="Premium"
                  className="mr-2"
                  required
                />
                <span className="font-bold">Premium — ₦400,000+</span>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>Full site + backend</li>
                  <li>Payments, SEO, dashboard</li>
                  <li>10–15 days delivery</li>
                </ul>
              </label>
            </div>
          </div>

          <input
            type="text"
            placeholder="Full Name"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          />
          <select
            className="border border-white/20 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            placeholder="Type of websie"
            required
          >
            <option value="type of website" selected disabled>
              <span className="text-red-500 font-light text-2xl">
                type of website
              </span>
            </option>
            <option>Portfolio</option>
            <option>Company</option>
            <option>E-commerce</option>
            <option>Blog</option>
            <option>Landing Page</option>
          </select>
          <textarea
            placeholder="Project Description"
            rows="4"
            className="md:col-span-2 border border-white/20 py-2.5 px-4 font-light text-base rounded-2xl w-full bg-gray-900 backdrop-blur-sm  focus:shadow-[0_0_9px_rgba(34,21,238,0.7)] focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="text-md  bg-cyan-600 text-white font-semibold px-1 py-2 w-40 cursor-pointer rounded-md shadow-md hover:bg-cyan-500 hover:shadow-cyan-600 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hire;
