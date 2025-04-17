import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../app/globals.css"; // Ensure this path points to your global styles

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
