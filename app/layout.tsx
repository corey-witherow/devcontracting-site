import "./css/style.css";
import { Inter, Architects_Daughter } from "next/font/google";
import Header from "@/components/ui/header";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "DevContracting",
  description: "Software Development Assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"></link>
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/46c8dcfe94.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
            {/* <Banner /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
