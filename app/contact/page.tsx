"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-[#f4f5f7] px-20 py-16 max-md:px-6 max-md:py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#47a4a4] text-sm font-semibold tracking-widest uppercase mb-3">
            CONTACT US
          </p>
          <h1 className="text-[#1e3557] text-4xl font-extrabold leading-tight mb-4 max-md:text-3xl">
            Get In Touch
          </h1>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full" />
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-10 max-md:p-6">
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1e3557] text-sm font-bold uppercase tracking-widest">
                Name <span className="text-[#c8a96e]">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="border border-[#e8eaed] rounded-lg px-4 py-3 text-[#1e3557] text-sm focus:outline-none focus:border-[#47a4a4] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1e3557] text-sm font-bold uppercase tracking-widest">
                Email <span className="text-[#c8a96e]">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="border border-[#e8eaed] rounded-lg px-4 py-3 text-[#1e3557] text-sm focus:outline-none focus:border-[#47a4a4] transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1e3557] text-sm font-bold uppercase tracking-widest">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="border border-[#e8eaed] rounded-lg px-4 py-3 text-[#1e3557] text-sm focus:outline-none focus:border-[#47a4a4] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1e3557] text-sm font-bold uppercase tracking-widest">
                Message <span className="text-[#c8a96e]">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can we help you?"
                className="border border-[#e8eaed] rounded-lg px-4 py-3 text-[#1e3557] text-sm focus:outline-none focus:border-[#47a4a4] transition-colors resize-none"
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-green-600 text-sm font-semibold">
                ✓ Message sent successfully. We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-semibold">
                ✗ Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start bg-[#c8a96e] hover:bg-[#b8945a] disabled:opacity-60 text-white text-xs font-bold tracking-widest uppercase px-7 py-3 rounded-full transition-colors duration-200"
            >
              {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
