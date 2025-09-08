"use client";

import { useState } from "react";

const slides = [
  { src: "/images/cappadocia.jpg", text: "Răsărit în Cappadocia – zbor cu balonul și liniște interioară" },
  { src: "/images/istanbul.jpg", text: "Istanbul altfel – locuri mai puțin știute, spiritualitate vie" },
  { src: "/images/maria.jpg", text: "Casa Fecioarei Maria – un loc de rugăciune și liniște aproape de Efes" },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="space-y-10">
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-md">
        <img src={slides[current].src} alt={slides[current].text} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-lg">
          {slides[current].text}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-2 bg-white/70 px-2 py-1 rounded">‹</button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 bg-white/70 px-2 py-1 rounded">›</button>
      </div>

      <section className="text-center">
        <h2 className="text-2xl font-bold">Descoperim împreună, creștem împreună!</h2>
        <p className="mt-2 text-gray-600">
          Aici găsești articole, sfaturi și inspirație pentru călătoriile spirituale în Turcia.
        </p>
        <a
          href="/blog"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Citește pe blog
        </a>
      </section>
    </div>
  );
}
