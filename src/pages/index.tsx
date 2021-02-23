import Head from 'next/head';
import { CompletteChallenge } from '../components/CompletteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletteChallenge />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
