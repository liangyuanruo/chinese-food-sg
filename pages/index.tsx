import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const Map = dynamic(() => import("./components/Map"), {
    suspense: true,
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Chinese Food SG</title>
        <meta
          name="description"
          content="A map to display the types of Chinese food in Singapore"
        />
      </Head>
      {/* The Map */}
      <div className={styles.main}>
        <Suspense fallback={`loading...`}>
          <Map />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
