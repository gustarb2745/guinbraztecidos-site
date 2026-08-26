import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Loja de tecidos"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-blue-950 rounded-2xl p-6 shadow-xl hidden sm:block">
              <p className="font-serif text-3xl font-bold">+10</p>
              <p className="text-sm font-medium">anos de tradição</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Sobre a loja</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 mb-6">
              Referência em tecidos em Presidente Prudente
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Na Guinbraz Tecidos, você encontra variedade, qualidade e opções para diferentes projetos. Seja para costura, moda, decoração ou artesanato, temos tecidos para ajudar você a transformar suas ideias em realidade.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Atendimento especializado e acolhedor",
                "Variedade de tecidos para todos os projetos",
                "Qualidade garantida em cada metro",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}