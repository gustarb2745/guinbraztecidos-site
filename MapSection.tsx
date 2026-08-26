export function MapSection() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Localização</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Encontre nossa loja
          </h2>
          <p className="text-lg text-slate-600">
            R. Dr. Gurgel, 421 - Centro, Presidente Prudente - SP
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5!2d-51.3889!3d-22.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzMyLjIiUyA1McKwMjMnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Guinbraz Tecidos"
          />
        </div>
      </div>
    </section>
  );
}