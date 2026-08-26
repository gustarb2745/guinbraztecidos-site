import { Layers, Award, Users, Store, Sparkles } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Grande variedade de tecidos",
    description: "Centenas de opções para todos os tipos de projetos",
  },
  {
    icon: Award,
    title: "Qualidade para seus projetos",
    description: "Tecidos selecionados com rigor e cuidado",
  },
  {
    icon: Users,
    title: "Atendimento especializado",
    description: "Equipe pronta para ajudar na sua escolha",
  },
  {
    icon: Store,
    title: "Loja física em Presidente Prudente",
    description: "Visite nossa loja no centro da cidade",
  },
  {
    icon: Sparkles,
    title: "Produtos para diferentes tipos de criação",
    description: "Da costura ao artesanato, temos o que você precisa",
  },
];

export function Features() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Nossos diferenciais</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Por que escolher a Guinbraz?
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Compromisso com qualidade e satisfação em cada atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}