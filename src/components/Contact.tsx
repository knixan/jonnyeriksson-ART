"use client"

import { MdOutlineEmail, MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-black text-4xl lg:text-5xl font-bold mb-6">Kontakt</h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-1">
          <div>
            <h3 className="font-playfair text-black text-2xl font-medium mb-6">Låt oss prata konst</h3>
            <p className="text-gray-600 font-light mb-8">
              Är du intresserad av att köpa ett konstverk, diskutera en commission eller bara vill prata konst? 
              Jag ser fram emot att höra från dig.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MdOutlineEmail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">jonny.eriksson@konstmail.se</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">070-123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPlace className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Hallsberg</span>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}
