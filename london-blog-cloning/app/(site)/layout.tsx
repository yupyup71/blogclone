import "../globals.css";
import Link from "next/link";

export const metadata = {
  title: "London Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Home
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
