import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import localFont from "next/dist/compiled/@next/font/dist/local";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
export const metadata = {
  title: "Frontend Mentor",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-ubuntu`}>{children}</body>
    </html>
  );
}
