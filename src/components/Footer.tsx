import { FaPaintBrush, FaInstagram, FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Jonny Eriksson</h3>
            <p className="text-gray-300 font-light mb-4">
              Konstnär specialiserad på canvas-målningar som utforskar känslor och naturens skönhet.
            </p>
            <p className="text-gray-400 text-sm">
              Från Örebro, bor i Stockholm Värmdö<br />
              Född: 1988
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Snabblänkar</h4>
            <nav className="space-y-2">
              <a href="#hem" className="block text-gray-300 hover:text-white transition-colors">Hem</a>
              <a href="#om" className="block text-gray-300 hover:text-white transition-colors">Om mig</a>
              <a href="#konst" className="block text-gray-300 hover:text-white transition-colors">Konst</a>
              <a href="#kontakt" className="block text-gray-300 hover:text-white transition-colors">Kontakt</a>
            </nav>
          </div>
          <div>
            <h4 className="font-medium mb-4">Följ mitt arbete</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jonnyogeklint/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/messages/e2ee/t/25600059822940735" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <FaFacebookMessenger className="w-5 h-5" />
                <span>Messenger</span>
              </a>

              <a href="https://www.konst.se/jonnyeriksson" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <FaPaintBrush className="w-5 h-5" />
                <span>Konst.se</span>
              </a>

            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Jonny Eriksson. Alla rättigheter förbehållna.</p>
           <p>Kod och design av Josefine Eriksson <a href="https://kodochdesign.se" className="underline">kodochdesign.se</a></p>
        </div>
        
      </div>
    </footer>
  )
}
