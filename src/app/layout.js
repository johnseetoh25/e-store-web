import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { CartProvider } from "@/contexts/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Store Web",
  description: "create App by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
