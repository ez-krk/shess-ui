import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "../components/navbar/navbar.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-h-screen h-screen w-full flex flex-col justify-center items-center">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
