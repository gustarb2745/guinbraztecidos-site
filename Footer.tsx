import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Guinbraz Tecidos</h3>
            <p className="text-blue-200 mb-4">
              Qualidade, variedade e inspiração para os seus projetos.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg font-bold">f</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre nós", href: "#sobre" },
                { label: "Tecidos", href: "#tecidos" },
                { label: "Produtos", href: "#produtos" },
                { label: "Localização", href: "#localizacao" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-blue-200">
                  R. Dr. Gurgel, 421 - Centro
                  <br />
                  Presidente Prudente - SP
                  <br />
                  CEP: 19010-020
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-blue-200">(18) 98160-7075</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2026 Guinbraz Tecidos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}