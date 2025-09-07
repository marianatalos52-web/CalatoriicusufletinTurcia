import "./globals.css";

export const metadata = {
  title: "Călătorii cu suflet în Turcia",
  description: "Blog și site spiritual despre călătorii în Turcia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
