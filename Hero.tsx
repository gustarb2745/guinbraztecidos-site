import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Presidente Prudente - SP</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Guinbraz Tecidos
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-6 font-light">
              Qualidade, variedade e inspiração para os seus projetos.
            </p>
            <p className="text-blue-200 text-lg mb-8 max-w-xl">
              Encontre tecidos para transformar suas ideias em realidade. Moda, costura, decoração, artesanato e muito mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-blue-950 text-base px-8 py-6">
                Conheça nossos produtos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white text-base px-8 py-6 border border-white/20">
                Entre em contato
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80"
                    alt="Tecidos coloridos"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80"
                    alt="Rolos de tecido"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
                    alt="Costura"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80"
                    alt="Tecidos estampados"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}