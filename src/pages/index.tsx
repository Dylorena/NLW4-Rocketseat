import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletteChallenge } from '../components/CompletteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';
import styles from '../styles/pages/Home.module.css';

interface homeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: homeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletteChallenge />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

/* Uma função ou constante do next que obrigatoriamente precisa desse nome, é necessário ser assíncrona,
 mesmo que dentro dela não seja necessário chamar nada assíncrono.

Com essa função se pode manipular quais infos são passadas do servidor next para o cliente, pensando em SEO 
os motores de buscas não esperam a finalização das chamadas de api que vão no código acima, mas os que vai na função
abaixo será retornado nos motores de busca.
Tudo feito dentro dessa função será executado dentro do servidor Node e não no browser */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  //  Essas infos são passadas por props
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}