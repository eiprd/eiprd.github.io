import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        {/* <footer className="border-t border-neutral-200 bg-white"> */}
        <footer className="bg-white">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-6 md:flex md:items-start md:justify-between ">

            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.youtube.com/watch?v=liIqZtaXgF8&list=RDliIqZtaXgF8&start_radio=1"
                  target="_blank"
                  className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  {aboutMe.name}
                </a>
              </p>
            </div>

            <div className="mb-4">
              <p className="italic text-s text-neutral-300">
                Forked from{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                research-website-template
                </a>
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
