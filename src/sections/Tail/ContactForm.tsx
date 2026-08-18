"use client";

import { sendContacts } from "@/api";

const ContactForm = () => {
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

  const onSubmit = (e: any) => {
    e.preventDefault();

    const values = inputs.reduce(
      (final, current) => ({
        ...final,
        [current.name]: e.target[current.name].value,
      }),
      {}
    );

    sendContacts({ ...values, timestamp: new Date() })
      .then(() => alert("Your message has been sent. TQ :)"))
      .catch(() => alert("Something went wrong, plz try again. Sorry :("));

    alert("You're message has been sent. TQ :)");
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
          <button className="btn btn-success p-3 px-4 text-white" type="submit">
            <h6 className="text-center p-0 m-0">تواصل الآن</h6>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
