import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactGuestbook() {
  const form = useRef();
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => setSuccess('Message sent successfully!'))
      .catch(() => setSuccess('Failed to send message.'));
    e.target.reset();
  };

  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded"/>
        <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded"/>
        <textarea name="message" placeholder="Your Message" rows="6" className="p-3 border rounded"/>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
        {success && <p className="mt-2 text-green-500">{success}</p>}
      </form>
    </section>
  );
}
