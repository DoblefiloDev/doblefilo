import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import doblefilo from "../public/doblefiloBlack.svg";
import Header from "../components/Header";

import Typed from "typed.js";

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Work in Progress", "Coming Soon", "Doblefilo"],
      startDelay: 400,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 200,
      showCursor: false,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
        <title>Doblefilo</title>
        <meta
          name="description"
          content="Doblefilo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.textDiv}>
          <h1 className={styles.mainText} ref={typedElement}></h1>
        </div>
        <Image src={doblefilo} alt="Doblefilo logo" height={700} width={700} />
      </main>
    </div>
  );
}
