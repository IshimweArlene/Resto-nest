import Footer from "./comps/Footer";
import Navbar from "./comps/Navbar";
import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
