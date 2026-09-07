import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitin Yadav | Portfolio",
  description: "A polished personal portfolio for Nitin Yadav.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
