import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise",
  description: "Next-Gen Expertise For Your Enterprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        {children}
      </body>
    </html>
  );
}