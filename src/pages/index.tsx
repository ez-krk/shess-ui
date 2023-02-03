import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>shess</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero max-h-screen h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <button className="btn btn-primary btn-md">Connect Wallet</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
