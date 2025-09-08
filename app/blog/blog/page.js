import Link from "next/link";

const articole = [
  { slug: "istanbul-altfel", title: "Istanbul altfel: locuri ascunse și spiritualitate", desc: "Descoperă Istanbulul mai puțin turistic, cu cartiere autentice și locuri de suflet." },
  { slug: "cappadocia-experienta-spirituala", title: "Cappadocia – experiență spirituală", desc: "Ritualuri la răsărit, peisaje unice și liniște interioară." },
  { slug: "casa-fecioarei-maria", title: "Casa Fecioarei Maria – lângă Efes", desc: "Un loc sacru, de rugăciune și vindecare, aproape de Kuşadası." },
  { slug: "recomandari-calatorie", title: "Recomandări de călătorie în Turcia", desc: "Sfaturi practice și locuri mai puțin cunoscute." },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Articole pe blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {articole.map((art) => (
          <div key={art.slug} className="p-6 border rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{art.title}</h2>
            <p className="text-gray-600 mt-2">{art.desc}</p>
            <Link href={`/blog/${art.slug}`} className="text-blue-600 hover:underline mt-3 block">
              Citește mai mult →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
