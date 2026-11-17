import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import GradMatch  from './components/GradMatch'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GradMatch",
  description: "Capstone Project I from Group 14",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      {/*importting header in the body but outside the child*/}

      <body className="min-h-full flex flex-col">
        < GradMatch/>
        {children}</body>
    </html>
  );
}
