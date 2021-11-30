import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import doblefilo from "../public/doblefilo.svg";

import Typed from "typed.js";

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Working in Progress", "Coming Soon", "Doblefilo"],
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
        <title>Doblefilo</title>
        <meta
          name="description"
          content="Doblefilo is a free software organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textDiv}>
          <h1 ref={typedElement}></h1>
        </div>
        <span className={styles.logo}>
          <Image src={doblefilo} alt="Doblefilo logo" height={700} width={700} />
        </span>
      </main>
    </div>
  );
}
