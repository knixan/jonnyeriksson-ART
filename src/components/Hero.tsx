"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section id="hem" className="pt-16 min-h-screen flex items-center relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.konst.se/bakgrunder/2000/31410016.jpg"
          alt="Bakgrundsbild"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Konst som<br />
              <span className="italic">berör själen</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 font-light">
              Välkommen till min värld av canvas-målningar där varje penseldrag berättar en historia och varje färg väcker känslor.
            </p>
            <a
              href="#konst"
              className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Utforska min konst
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
              <Image
                src="https://cdn.konst.se/avatarer/400/31414526.jpg"
                alt="Jonny Eriksson - Konstnär"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
