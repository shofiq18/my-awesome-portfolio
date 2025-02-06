import { Mail, MessageSquare, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

    emailjs
      .sendForm(
        "service_a965ium", // Your EmailJS Service ID
        "template_0r4tavd", // Your EmailJS Template ID
        form.current,
        "hjO53ZNcTauv1bpgX" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success("Message sent successfully!"); // Success toast
          if (form.current) {
            form.current.reset(); // Reset form fields
          }
        },
        (error) => {
          setIsLoading(false);
          console.error(error.text);
          toast.error("Failed to send the message. Please try again."); // Error toast
        }
      )
      .catch((error) => {
        setIsLoading(false);
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:shafiqulislam25021998@gmail.com"
                    className="text-gray-400 hover:text-primary"
                  >
                    shafiqulislam25021998@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a
                    href="tel:+8801874049365"
                    className="text-gray-400 hover:text-primary"
                  >
                    +8801874049365
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <a
                    href="https://web.whatsapp.com/"
                    className="text-gray-400 hover:text-primary"
                  >
                    +8801838538720
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg py-2 px-3 bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg py-2 px-3 bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg py-2 px-3 bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`btn bg-blue-800 hover:bg-blue-900 text-white w-full ${
                  isLoading ? "opacity-50" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
