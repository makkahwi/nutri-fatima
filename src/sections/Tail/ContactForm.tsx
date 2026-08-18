"use client";

import { sendContacts } from "@/api";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const inputs = [
    { name: "name", title: "الاسم", type: "text", required: true },
    {
      name: "email",
      title: "البريد الإلكتروني",
      type: "email",
      required: false,
    },
    { name: "phone", title: "رقم الهاتف", type: "text", required: true },
    {
      name: "subject",
      title: "عنوان الرسالة",
      type: "text",
      required: false,
    },
    {
      name: "message",
      title: "محتوى الرسالة",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;
    const values = inputs.reduce(
      (final, current) => ({
        ...final,
        [current.name]: form.elements.namedItem(current.name)
          ? (form.elements.namedItem(current.name) as HTMLInputElement).value
          : "",
      }),
      {},
    );

    setIsSending(true);

    try {
      await sendContacts({ ...values, timestamp: new Date().toISOString() });
      form.reset();
      alert("تم إرسال رسالتك بنجاح. شكرًا لتواصلك.");
    } catch {
      alert("تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="row">
        {inputs.map(({ name, title, required, type, fullWidth }, i) => (
          <div className={`col-lg-${fullWidth ? 12 : 6} mb-2`} key={i}>
            <div className="form-label text-success fw-bold">
              {title}
              {required ? <span className="text-danger">{" *"}</span> : ""}
            </div>

            {type === "textarea" ? (
              <textarea
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

        <div className="col-lg-2 col-md-3 float-end">
          <button
            className="btn btn-success p-3 px-4 text-white"
            type="submit"
            disabled={isSending}
          >
            <h6 className="text-center p-0 m-0">
              {isSending ? "جاري الإرسال..." : "تواصلوا الآن"}
            </h6>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
