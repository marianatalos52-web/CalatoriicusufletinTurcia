import "./globals.css";

export const metadata = {
  title: "Călătorii cu suflet în Turcia",
  description: "Blog de călătorii spirituale în Turcia: Cappadocia, Istanbul, Casa Fecioarei Maria și multe altele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <header className="p-4 bg-gray-100 border-b">
          <nav className="flex gap-4">
            <a href="/">Acasă</a>
            <a href="/blog">Blog</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-6 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Călătorii cu suflet în Turcia
        </footer>
      </body>
    </html>
  );
}

