import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahreen Home Service",
  description: "Home Service App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-6 md:mx-16">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
