import type { AppProps } from "next/app";
import "../app/globals.css"; // Ensure this path points to your global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
