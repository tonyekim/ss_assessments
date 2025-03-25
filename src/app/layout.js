import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soft Solutions Limited",
  description: "Frontend Engineer recruitment assessments",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Navbar />

          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
