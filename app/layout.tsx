import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuS Hemmerde 1919 e.V. – Design Demos",
  description: "Drei Designvorschläge für die Website des TuS Hemmerde 1919 e.V.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
