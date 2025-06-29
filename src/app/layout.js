import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

import Footer from "./comps/Footer";
import Navbar from "./comps/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
