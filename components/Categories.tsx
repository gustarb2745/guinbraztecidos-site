import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Tecidos para roupas",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80",
    description: "Tecidos perfeitos para confecção de roupas",
  },
  {
    name: "Tecidos estampados",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    description: "Estampas variadas para todos os estilos",
  },
  {
    name: "Tecidos para decoração",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    description: "Tecidos para dar vida aos seus ambientes",
  },
  {
    name: "Tecidos para artesanato",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    description: "Materiais para seus projetos criativos",
  },
  {
    name: "Malhas",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    description: "Malhas confortáveis e de qualidade",
  },
  {
    name: "Algodão",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80",
    description: "Algodão natural e respirável",
  },
  {
    name: "Tricoline",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    description: "Tricoline versátil para diversos usos",
  },
  {
    name: "Outros tecidos",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    description: "Descubra nossa variedade completa",
  },
];

export function Categories() {
  return (
    <section id="tecidos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Nossos tecidos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Categorias de tecidos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore nossa variedade de tecidos para todos os tipos de projetos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-blue-950 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                <Button
                  variant="ghost"
                  className="text-blue-800 hover:text-blue-900 hover:bg-blue-50 p-0"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}