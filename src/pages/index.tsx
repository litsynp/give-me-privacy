import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Give Me Privacy!</title>
        <meta name="description" content="Give me some privacy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button>Start</button>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/litsynp" target="_blank" rel="noopener noreferrer">
          <span className="mr-1">Developed by</span>
          <Image src="/octicons-mark-github.svg" alt="Vercel Logo" width={'20rem'} height={'20rem'} />
          <span className="ml-1">litsynp</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
