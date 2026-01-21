export default function About() {
  return (
    <section id="om" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl  text-black font-bold mb-6">Om mig</h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Jonny Eriksson arbetar med måleri där färg, form och känsla står i centrum. Hans bilder tar form ur intryck från omgivningen, kombinerat med fantasi och personliga bildvärldar.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Måleriet är figurativt, med tydliga penseldrag och livfulla färgkontraster. Vardaglig omgivning och fantasifulla bilder tar form där färgen förmedlar stämning snarare än att exakt återge verkligheten. Arbetet växer fram intuitivt, med fokus på stämning, i olja samt akryl.
          </p>
         
        </div>
      </div>
    </section>
  )
}
