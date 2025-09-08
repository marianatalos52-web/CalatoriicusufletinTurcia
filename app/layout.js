import './globals.css';

export const metadata = {
  title: "Călătorii cu suflet în Turcia",
  description: "Blog de călătorii spirituale în Turcia: Cappadocia, Istanbul, Göbekli Tepe, Casa Fecioarei Maria și multe altele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="bg-background text-foreground">
        <header className="p-4 shadow-md flex justify-between items-center bg-white">
          <h1 className="font-bold text-xl">Călătorii cu suflet în Turcia</h1>
          <nav className="space-x-4 text-sm">
            <a href="/" className="hover:underline">Acasă</a>
            <a href="/blog" className="hover:underline">Blog</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
        <footer className="p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Călătorii cu suflet în Turcia. Descoperim împreună, creștem împreună!
        </footer>
      </body>
    </html>
  );
}
