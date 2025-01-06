import { Mail, MessageSquare, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20  bg-gray-950">
    <div className="max-w-7xl  mx-auto px-8 md:px-4 bg-gray-950 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:shafiqulislam25021998@gmail.com" className="text-gray-600 hover:text-primary">
                  shafiqulislam25021998@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
                  +8801874049365
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a href="https://web.whatsapp.com/" className="text-gray-600 hover:text-primary">
                  +8801838538720
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg py-2 bg-gray-700 border-gray-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg py-2 bg-gray-700 border-gray-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg bg-gray-700 border-gray-300 focus:border-primary focus:ring-primary"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn bg-blue-800 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    // <div id="contact" className="py-20 bg-base-200">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-4xl font-bold text-center mb-8">Contact Information</h2>
    //     <div className="max-w-md mx-auto bg-base-100 p-6 shadow-lg rounded-md">
    //       <p className="text-lg mb-4">
    //         Feel free to reach out for any collaboration, questions, or just to say hello!
    //       </p>
    //       <ul className="space-y-4">
    //         <li>
    //           <strong>Email:</strong>{" "}
    //           <a href="mailto:example@example.com" className="text-primary">
    //             example@example.com
    //           </a>
    //         </li>
    //         <li>
    //           <strong>Phone:</strong>{" "}
    //           <a href="tel:+1234567890" className="text-primary">
    //             +123-456-7890
    //           </a>
    //         </li>
    //         <li>
    //           <strong>WhatsApp:</strong>{" "}
    //           <a
    //             href="https://wa.me/1234567890"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-primary"
    //           >
    //             +123-456-7890
    //           </a>
    //         </li>
    //       </ul>
    //       <div className="mt-6 text-center">
    //         <a
    //           href="mailto:example@example.com"
    //           className="btn btn-primary"
    //         >
    //           Send an Email
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
