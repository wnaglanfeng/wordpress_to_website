import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js application!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Next.js App!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>src/pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;