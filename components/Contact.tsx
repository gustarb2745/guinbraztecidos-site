import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";

export function Contact() {
  const phone = "181981607075";
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Contato</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 mb-6">
              Guinbraz Tecidos
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Endereço</h3>
                  <p className="text-slate-600">
                    R. Dr. Gurgel, 421 - Centro
                    <br />
                    Presidente Prudente - SP
                    <br />
                    CEP: 19010-020
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Telefone</h3>
                  <p className="text-slate-600">(18) 98160-7075</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Horário de funcionamento</h3>
                  <p className="text-slate-600">Segunda a sábado até as 18:00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Ligar agora
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-blue-950">
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir no Google Maps
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-serif text-2xl font-bold text-blue-950 mb-6">
              Envie uma mensagem
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(18) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}