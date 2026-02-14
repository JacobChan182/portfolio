import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: "error", message: "Email service not configured. Add REACT_APP_EMAILJS_* env variables." });
      return;
    }
    setStatus(null);
    setSending(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          setSending(false);
          setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        },
        (error) => {
          setSending(false);
          setStatus({ type: "error", message: error.text || "Something went wrong. Please try again." });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="from_name" placeholder="Your Name" required disabled={sending} />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        title="Please enter a valid email address (e.g. name@example.com)"
        disabled={sending}
      />
      <textarea name="message" placeholder="Your Message" rows={5} required disabled={sending} />
      <button type="submit" className="contact-form__submit" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <p className={`contact-form__status contact-form__status--${status.type}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
