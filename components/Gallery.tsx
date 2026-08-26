const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80",
    alt: "Rolos de tecido coloridos",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    alt: "Tecidos variados",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    alt: "Costura e artesanato",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    alt: "Tecidos estampados",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    alt: "Moda e decoração",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80",
    alt: "Texturas de tecidos",
    className: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Galeria</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Inspiração em cada detalhe
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a diversidade de cores, texturas e possibilidades
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}