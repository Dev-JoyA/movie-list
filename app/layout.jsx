import {Montserrat} from "next/font/google";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

const montserrat = Montserrat({subsets: ['latin'],  weight: ['400', '600', '700']});

export const metadata = {
  title: "Movie List App",
  description: "A web application to manage and explore movie databases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.className} box-border min-h-screen bg-customDarkBlue text-[#ffffff]`} >
        {children}
        <Footer />
      </body>
    </html>
  );
}
