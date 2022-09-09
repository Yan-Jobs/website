import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function LearnMore() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yan | Home</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png">
        <link rel="manifest" href="../public/site.webmanifest">
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#0b272f">
        <link rel="shortcut icon" href="../public/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="../public/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
      </Head>
      <main className="min-h-screen p-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="font-code text-2xl italic">In development</h1>
      </main>
      <Footer />
    </div>
  );
}
