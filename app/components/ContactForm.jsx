"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-6 max-w-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={formData.name}
        className="p-3 border text-[#292A44] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B75D]"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        className="p-3 border text-[#292A44] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B75D]"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        value={formData.message}
        rows={5}
        className="p-3 border text-[#292A44] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8B75D]"
        required
      />

      <button
        type="submit"
        className="bg-[#E46B3F] hover:bg-[#C4402A] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
