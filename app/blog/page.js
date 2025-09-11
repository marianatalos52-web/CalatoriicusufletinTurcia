import Link from "next/link";

const articole = [
  { slug: "istanbul-altfel", title: "Istanbul altfel: locuri ascunse și spiritualitate" },
  { slug: "cappadocia-experienta-spirituala", title: "Cappadocia – experiență spirituală" },
  { slug: "casa-fecioarei-maria", title: "Casa Fecioarei Maria – lângă Efes" },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Articole pe blog</h1>
      <ul className="space-y-4">
        {articole.map((art) => (
          <li key={art.slug}>
            <Link href={`/blog/${art.slug}`} className="text-blue-600 hover:underline">
              {art.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

