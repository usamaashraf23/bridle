import localFont from "next/font/local";
import "./globals.css";
import SideBarDesktop from "@/components/SideBarDesktop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bridle",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBarDesktop />
        <main className="sm:ml-[270px] m-0 ">{children}</main>
      </body>
    </html>
  );
}