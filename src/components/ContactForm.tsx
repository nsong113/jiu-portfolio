"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:7000/api/sendEmail");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText === "success") {
        alert("Email sent");
        setForm(DEFAULT_DATA);
      } else {
        alert("Something went wrong");
      }
    };

    xhr.send(JSON.stringify(formData));
  };

  return (
    <section className="w-96 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full my-4 flex flex-col gap-2 p-4 rounded-xl bg-orange-100 mb-12"
      >
        <label htmlFor="name" className="font-semibold mt-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={onChange}
        />
        <label htmlFor="email" className="font-semibold mt-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={onChange}
        />
        <label htmlFor="subject" className="font-semibold mt-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message" className="font-semibold mt-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button type="submit" className="font-semibold hover:text-gray-500">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
