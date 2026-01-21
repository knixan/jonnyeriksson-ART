"use client";

import { MdOutlineEmail, MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const contactItems = [
  {
    icon: MdOutlineEmail,
    label: "jonny.eriksson@konstmail.se",
    href: "mailto:jonny.eriksson@konstmail.se",
  },
  {
    icon: FaPhone,
    label: "070-123 45 67",
  },
  {
    icon: MdPlace,
    label: "Hallsberg",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6 text-black">
            Kontakt
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto" />
        </div>

        <div>
          <h3 className="font-playfair text-2xl font-medium mb-6 text-black">
            Låt oss prata konst
          </h3>
          <p className="text-gray-600 font-light mb-8">
            Är du intresserad av att köpa ett konstverk, diskutera en
            commission eller bara vill prata konst? Jag ser fram emot att höra
            från dig.
          </p>

          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, href }, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                {href ? (
                  <a href={href} className="text-gray-700 hover:underline">
                    {label}
                  </a>
                ) : (
                  <span className="text-gray-700">{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
