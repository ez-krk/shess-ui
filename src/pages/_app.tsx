import type { AppProps } from "next/app";

import { ContextProvider } from "../contexts/ContextProvider";
import Navbar from "../components/Navbar";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <main className="max-h-screen h-screen w-full flex flex-col justify-center items-center">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ContextProvider>
    </>
  );
}
