import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => {
  const CONTACT_DETAILS = [
    { label: "Location", val: "Quezon City, Philippines" },
    { label: "Phone", val: "0977 061 4738" },
    { label: "Email", val: "kenzovcastillo@gmail.com" },
  ];
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="border-t border-neutral-200 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader index="03 — Contact" title="Let's connect" />

        <div className="grid grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <p className="font-syne text-[1.6rem] font-bold tracking-tight leading-snug mb-12">
              Open to remote opportunities.
              <br />
              Let's build something together.
            </p>
            <div className="flex flex-col">
              {CONTACT_DETAILS.map((d) => (
                <div key={d.label} className="py-4 border-b border-neutral-200">
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-neutral-300 mb-1">
                    {d.label}
                  </p>
                  <p className="text-[0.88rem] text-neutral-900">{d.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="border border-neutral-200 flex flex-col">
            <div className="grid grid-cols-2 border-b border-neutral-200">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-transparent border-none outline-none border-r border-neutral-200 font-sans text-[0.82rem] text-neutral-900 px-5 py-5 placeholder:text-neutral-300"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-transparent border-none outline-none font-sans text-[0.82rem] text-neutral-900 px-5 py-5 placeholder:text-neutral-300"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-transparent border-none outline-none border-b border-neutral-200 font-sans text-[0.82rem] text-neutral-900 px-5 py-5 placeholder:text-neutral-300"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="bg-transparent border-none outline-none border-b border-neutral-200 font-sans text-[0.82rem] text-neutral-900 px-5 py-5 resize-none min-h-[130px] placeholder:text-neutral-300"
            />
            <div className="px-5 py-4 flex justify-end">
              <button className="font-sans text-[0.72rem] tracking-widest uppercase bg-neutral-900 text-white px-7 py-3 font-medium hover:bg-neutral-700 transition-colors cursor-pointer border-none">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
