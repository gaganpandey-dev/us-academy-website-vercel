import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata = {
  title: "US Academy | K–10 School",
  description:
    "US Academy is a trusted K–10 school committed to academic excellence, discipline, innovation, and holistic development of students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">

        {/* Navbar */}
        <Navbar />

        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Floating Social Icons */}
        <SocialFloat />

        {/* Page Content */}
        <main className="grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}