"use client";

import { FormEvent } from "react";

const WHATSAPP_NUMBER = "962797035869";

const ContactForm = () => {
  const inputs = [
    { name: "name", title: "الاسم", type: "text", required: true },
    {
      name: "email",
      title: "البريد الإلكتروني",
      type: "email",
      required: false,
    },
    {
      name: "subject",
      title: "عنوان الرسالة",
      type: "text",
      required: false,
      fullWidth: true,
    },
    {
      name: "message",
      title: "محتوى الرسالة",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = inputs.reduce<Record<string, string>>(
      (final, current) => ({
        ...final,
        [current.name]: form.elements.namedItem(current.name)
          ? (form.elements.namedItem(current.name) as HTMLInputElement).value
          : "",
      }),
      {},
    );

    const message = [
      `الاسم: ${values.name}`,
      values.email && `البريد الإلكتروني: ${values.email}`,
      values.subject && `عنوان الرسالة: ${values.subject}`,
      `محتوى الرسالة: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="row">
        {inputs.map(({ name, title, required, type, fullWidth }, i) => (
          <div className={`col-lg-${fullWidth ? 12 : 6} mb-2`} key={i}>
            <label htmlFor={name} className="form-label text-success fw-bold">
              {title}
              {required ? <span className="text-danger">{" *"}</span> : ""}
            </label>

            {type === "textarea" ? (
              <textarea
                rows={4}
                id={name}
                name={name}
                placeholder={title}
                className="form-control py-3"
                required={required}
              />
            ) : (
              <input
                id={name}
                name={name}
                placeholder={title}
                className="form-control py-3"
                type={type}
                required={required}
              />
            )}
          </div>
        ))}

        <div className="col-12 mt-3">
          <button
            className="btn btn-success p-3 px-4 text-white w-100"
            type="submit"
          >
            <h6 className="text-center p-0 m-0">تواصلوا عبر واتساب</h6>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
