import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Clock, MessageCircle, ChevronRight, Star, Scissors, Ruler, Sparkles, Store, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const categories = [
  {
    name: "Tecidos para Roupas",
    description: "Alfaiataria, viscose, linho e muito mais para suas criações.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Tecidos Estampados",
    description: "Estampas exclusivas para dar vida aos seus projetos.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    color: "from-amber-500 to-amber-700"
  },
  {
    name: "Tecidos para Decoração",
    description: "Cortinas, almofadas e revestimentos com elegância.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    color: "from-emerald-600 to-emerald-800"
  },
  {
    name: "Tecidos para Artesanato",
    description: "Feltro, EVA e tecidos especiais para suas criações.",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    color: "from-rose-500 to-rose-700"
  },
  {
    name: "Malhas",
    description: "Malhas macias e confortáveis para moda e inverno.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "Algodão",
    description: "Algodão de alta qualidade para confecção e artesanato.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
    color: "from-teal-600 to-teal-800"
  },
  {
    name: "Tricoline",
    description: "Tricoline versátil para moda, decoração e artesanato.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop",
    color: "from-indigo-600 to-indigo-800"
  },
  {
    name: "Outros Tecidos",
    description: "Tecidos especiais e novidades para todos os projetos.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    color: "from-slate-600 to-slate-800"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
];

const differentials = [
  {
    icon: Sparkles,
    title: "Grande Variedade",
    description: "Centenas de opções em tecidos para todos os tipos de projetos."
  },
  {
    icon: Scissors,
    title: "Qualidade Superior",
    description: "Materiais selecionados para garantir o melhor resultado."
  },
  {
    icon: Ruler,
    title: "Atendimento Especializado",
    description: "Equipe preparada para ajudar na escolha ideal."
  },
  {
    icon: Store,
    title: "Loja Física",
    description: "Visite nossa loja em Presidente Prudente - SP."
  },
  {
    icon: Palette,
    title: "Para Toda Criação",
    description: "Moda, decoração, artesanato e muito mais."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Tecidos", href: "#tecidos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
                <span className="text-white font-serif text-xl font-bold">G</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-blue-900">Guinbraz</h1>
                <p className="text-xs text-blue-600 tracking-widest uppercase">Tecidos</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-lg">
                Fale conosco
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-blue-100 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                Fale conosco
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=1080&fit=crop"
            alt="Tecidos coloridos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white">Presidente Prudente - SP</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Guinbraz
              <span className="block text-amber-400">Tecidos</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-4">
              Qualidade, variedade e inspiração para os seus projetos.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              Encontre tecidos para transformar suas ideias em realidade. Moda, costura, decoração, artesanato e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg px-8 py-6 shadow-xl">
                Conheça nossos produtos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Loja de tecidos"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white rounded-2xl p-6 shadow-xl">
                <p className="font-serif text-4xl font-bold text-amber-400">+10</p>
                <p className="text-sm text-blue-200">anos de tradição</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Sobre a loja</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">
                Referência em tecidos em Presidente Prudente
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Na Guinbraz Tecidos, você encontra variedade, qualidade e opções para diferentes projetos. Seja para costura, moda, decoração ou artesanato, temos tecidos para ajudar você a transformar suas ideias em realidade.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Atendimento personalizado",
                  "Produtos selecionados",
                  "Preços justos",
                  "Variedade incomparável"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="tecidos" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Nossas categorias</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-4">
              Tecidos para todos os projetos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa variedade de tecidos selecionados para atender todas as suas necessidades criativas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-blue-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <Button variant="ghost" className="text-blue-700 hover:text-blue-900 hover:bg-blue-50 p-0">
                    Saiba mais
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="produtos" className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-amber-400 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Nossos diferenciais</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Por que escolher a Guinbraz?
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Compromisso com qualidade e satisfação em cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentials.map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">Galeria</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-4">
              Inspiração para seus projetos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore texturas, cores e estampas que vão dar vida às suas criações.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${index % 3 === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">Tecidos Guinbraz</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Contato</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">
                Visite nossa loja ou fale conosco
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos prontos para ajudar você a encontrar o tecido perfeito para seu projeto.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      R. Dr. Gurgel, 421 - Centro
                      <br />
                      Presidente Prudente - SP
                      <br />
                      CEP: 19010-020
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Telefone</h3>
                    <p className="text-gray-600">(18) 98160-7075</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Horário de funcionamento</h3>
                    <p className="text-gray-600">Segunda a sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 13h</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white flex-1">
                  <Phone className="mr-2 w-4 h-4" />
                  Ligar agora
                </Button>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 flex-1">
                  <MapPin className="mr-2 w-4 h-4" />
                  Abrir no Google Maps
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white flex-1">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Falar pelo WhatsApp
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-2xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5!2d-51.3889!3d-22.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzMyLjIiUyA1McKwMjMnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full min-h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Guinbraz Tecidos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5518981607075"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      <Footer />
    </div>
  );
}