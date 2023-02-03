import Head from "next/head";

import { useEffect, useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Spinner from "../components/Spinner";
import Shess from "../components/Shess";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { publicKey, signMessage } = useWallet();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, [publicKey]);

  return (
    <>
      <Head>
        <title>shess</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero max-h-screen h-screen bg-base-200">
        {loading ? (
          <Spinner />
        ) : (
          <div className="hero-content text-center">
            <div className="max-w-md">
              {publicKey ? <Shess /> : <WalletMultiButton />}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
