"use client";

import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { EmailTemplate } from "../components/emailTemplate";
import emailjs from "emailjs-com";
import ReactDOMServer from "react-dom/server";

interface Email {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<Email>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // You must configure your EmailJS service/template/user IDs
  const SERVICE_ID = "your_service_id";
  const TEMPLATE_ID = "your_template_id";
  const USER_ID = "your_user_id";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // setError(null);

    // Render EmailTemplate to HTML string
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      <EmailTemplate
        firstName={form.firstName}
        lastName={form.lastName}
        email={form.email}
        message={form.message}
      />
    );

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
          email_html: emailHtml, 
          to_email: "brtchen@ucdavis.edu",
        },
        USER_ID
      );
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      // setError("Failed to send email. Please Email Me On Gmail.");
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-4 py-16 bg-white">
      <div className="container mx-auto mb-16 text-center">
        <h1 className="mb-4 font-bold text-5xl text-black">Contact Me</h1>
        <p className="mx-auto w-full max-w-2xl !text-gray-500">
          Feel free to reach out to me!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="flex flex-col lg:flex-row p-0">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 bg-gray-900 p-8 flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-white text-2xl">Contact Information</h4>
                <p className="mb-8 text-base !text-gray-400">
                  Fill up the form and I will get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <PhoneIcon className="h-6 w-6 text-white" />
                  <span className="text-white font-semibold">+1(209) 495 4671</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                  <span className="text-white font-semibold">brtchen@ucdavis.edu</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <button className="bg-transparent text-white p-2 rounded hover:bg-gray-800 transition" aria-label="Facebook">
                  <i className="fa-brands fa-facebook text-lg" />
                </button>
                <button className="bg-transparent text-white p-2 rounded hover:bg-gray-800 transition" aria-label="Instagram">
                  <i className="fa-brands fa-instagram text-lg" />
                </button>
                <button className="bg-transparent text-white p-2 rounded hover:bg-gray-800 transition" aria-label="GitHub">
                  <i className="fa-brands fa-github text-lg" />
                </button>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 p-8 bg-white">
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-gray-500 font-medium">First Name</p>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="eg. Lucas"
                      value={form.firstName}
                      onChange={handleChange}
                      className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:ring-0 shadow-none transition-none !min-w-full"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Last Name</p>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="eg. Jones"
                      value={form.lastName}
                      onChange={handleChange}
                      className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:ring-0 shadow-none transition-none !min-w-full"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-500 font-medium">Email</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="eg. 1217brent@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:ring-0 shadow-none transition-none !min-w-full"
                  />
                </div>
                <div className="mb-8">
                  <p className="text-gray-500 font-medium">Your Message</p>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 focus:outline-none focus:shadow-none focus-visible:outline-none focus-visible:ring-0 shadow-none transition-none !min-w-full"
                    style={{ outline: 'none' }}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="w-full md:w-auto shadow-lg font-bold text-lg tracking-wide bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-200"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send message"}
                  </button>
                </div>
                {sent && (
                  <p className="text-green-600 mt-4">Your message has been sent!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
