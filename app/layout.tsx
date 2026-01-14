import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "US Academy | K–12 School",
  description:
    "US Academy is a trusted K–12 school committed to academic excellence, discipline, innovation, and holistic development of students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
