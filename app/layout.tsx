import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ClientProvider from "@/HOC/ClientProvider";

const font = Roboto ({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Website Uni-President VietNam",
  description: "Website Uni-President VietNam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <ClientProvider>
          <Toaster />
          {children}
          </ClientProvider>
      </body>
    </html>
  );
}
