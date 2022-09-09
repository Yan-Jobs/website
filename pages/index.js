import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function LearnMore() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy | Duels Essentials</title>
      </Head>
      <main className="min-h-screen p-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="font-code text-2xl italic">In development</h1>
      </main>
    </div>
  );
}
