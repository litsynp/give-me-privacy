import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  const [tapWaterSound, setTapWaterSound] = useState(null);
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!playing);
  const toggleSound = () => {
    playing ? tapWaterSound.pause() : tapWaterSound.play();
    togglePlaying();
  };

  useEffect(() => {
    setTapWaterSound(new Audio('/sounds/tap-water-sound.mp3'));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${'/images/rainfall-background.gif'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(30%)',
      }}
    >
      <Head>
        <title>Give Me Privacy!</title>
        <meta name="description" content="Give me some privacy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          id="start-button"
          className="p-1 px-3 border-b-2 rounded border-blue-300 bg-blue-50 text-blue-800"
          onClick={toggleSound}
        >
          {playing ? 'Stop' : 'Start'}
        </button>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/litsynp" target="_blank" rel="noopener noreferrer">
          <span className="mr-1">Developed by</span>
          <Image src="/images/octicons-mark-github.svg" alt="Vercel Logo" width={'20rem'} height={'20rem'} />
          <span className="ml-1">litsynp</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
