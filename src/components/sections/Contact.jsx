// Contact.jsx
import React from "react";
import SectionHeading from "../../ui-components/SectionHeading";
import ContactForm from "./ContactForm";
import { contactsInfo } from "../../utils/utils.constant";

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <SectionHeading title="Get in Touch" />

        <div className="md:flex items-center gap-16 max-w-screen-lg mx-auto">
          {/* Contact Form */}
          <div className="md:w-full md:order-1">
            <ContactForm />
          </div>
          {/* Social Media Links */}
          <div className="md:w-1/2 space-y-4 flex flex-col md:order-2 md:mt-0 mt-8">
            {contactsInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                className="flex flex-col md:flex-row gap-5 p-5 border border-slate-800 shadow-2xl hover:shadow-slate-800 dark:bg-gray-800 rounded-2xl hover:shadow-2xl space-x-2 text-primary hover:text-primary/80 duration-300 transition-all hover:scale-105"
              >
                <div>{contact.icon}</div>
                <div>
                  <p className="text-sm">{contact.name} :</p>
                  <p className="text-xs text-primary/60">{contact.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
