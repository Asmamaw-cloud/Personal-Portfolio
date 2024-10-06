import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const messageText = form.current.message.value;

    if (!name || !email || !messageText) {
      alert('All fields are required.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm('service_nwfnhzg', 'template_uegc52e', form.current, 'wtzvNpIKY-WWjFgtE')
      .then(
        () => {
          setLoading(false);
          alert('Message sent successfully!');
          form.current.reset();  // Reset form after success
        },
        (error) => {
          setLoading(false);
          alert('Failed to send the message. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact Me</h1>
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            name="from_name"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            name="from_email"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <textarea
          name="message"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
          placeholder="Write Your Message..."
          rows={10}
        ></textarea>
        
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden text-xl text-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
