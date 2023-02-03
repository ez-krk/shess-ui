import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <Component {...pageProps} />
    </main>
  );
}
