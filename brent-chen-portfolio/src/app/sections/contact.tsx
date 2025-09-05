"use client";

import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import ReactDOMServer from "react-dom/server";
import type { Email } from "../dataTypes/Email";
import { EmailTemplate } from "../templates/emailTemplate";

export function ContactForm() {
  const [form, setForm] = useState<Email>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  function emailIsValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !emailIsValid(form.email)
    ) {
      setError(true);
      return;
    }
    setSending(true);
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
        SERVICE_ID!,
        TEMPLATE_ID!,
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
    <section
      id="contact-section"
      className="w-full min-h-screen bg-[#ffe5e5] font-sans"
    >
      <div
        className="relative max-w-4xl mx-auto p-8 pt-16 bg-white/80 backdrop-blur-lg shadow-lg border border-white/60"
        style={{ borderRadius: 0 }}
      >
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-light text-5xl text-gray-900 tracking-wide drop-shadow-2xl">
            ご連絡・お問い合わせ
          </h1>
          <p className="mx-auto w-full max-w-2xl text-gray-700 font-light drop-shadow-lg">
            ご不明点やご相談がございましたら、下記フォームよりご連絡いただけますと幸いでございます。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div
            className="w-full lg:w-1/3 bg-gray-900 p-8 flex flex-col justify-between border border-gray-200"
            style={{ borderRadius: 0 }}
          >
            <div>
              <h4 className="mb-2 font-light text-white text-2xl drop-shadow-lg">
                ご連絡先情報
              </h4>
              <p className="mb-8 text-base text-gray-400 font-light drop-shadow-sm">
                フォームにご記入いただきましたら、24時間以内にご返信申し上げます。
              </p>
              <div className="flex items-center gap-4 mb-4">
                <PhoneIcon className="h-6 w-6 text-white" />
                <span className="text-white font-medium drop-shadow-md">
                  +1(209) 495 4671
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <span className="text-white font-medium drop-shadow-md">
                  brtchen@ucdavis.edu
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <button
                className="bg-transparent text-white p-2 hover:bg-gray-800 transition"
                aria-label="Facebook"
                style={{ borderRadius: 0 }}
              >
                <i className="fa-brands fa-facebook text-lg" />
              </button>
              <button
                className="bg-transparent text-white p-2 hover:bg-gray-800 transition"
                aria-label="Instagram"
                style={{ borderRadius: 0 }}
              >
                <i className="fa-brands fa-instagram text-lg" />
              </button>
              <button
                className="bg-transparent text-white p-2 hover:bg-gray-800 transition"
                aria-label="GitHub"
                style={{ borderRadius: 0 }}
              >
                <i className="fa-brands fa-github text-lg" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="w-full lg:w-2/3 p-8 bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg"
            style={{ borderRadius: 0 }}
          >
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 font-light mb-1">お名前（名）</p>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="例：太郎"
                    className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 outline-none shadow-none min-w-full"
                    required
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-light mb-1">お名前（姓）</p>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="例：山田"
                    className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 outline-none shadow-none min-w-full"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 font-light mb-1">メールアドレス</p>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="例：sample@example.com"
                  className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 outline-none shadow-none min-w-full"
                  required
                />
              </div>

              <div className="mb-8">
                <p className="text-gray-700 font-light mb-1">ご用件</p>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=""
                  className="pb-2 border-0 border-b border-black rounded-none bg-white text-black focus:border-black focus:ring-0 outline-none shadow-none min-w-full"
                  style={{ resize: "vertical", minHeight: "100px" }}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-sm font-medium shadow-xl shadow-red-500/50 border border-red-300/30 hover:scale-105 transition-transform duration-300"
                  style={{ borderRadius: 0 }}
                >
                  {sending ? "送信中..." : "送信する"}
                </button>
              </div>
              {sent && (
                <p className="text-green-600 mt-4 font-medium drop-shadow-lg">
                  メッセージが送信されました。誠にありがとうございます。
                </p>
              )}
              {error && (
                <p className="text-red-600 mt-4 font-medium drop-shadow-lg">
                  メッセージを送る事ができませんでした。
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}