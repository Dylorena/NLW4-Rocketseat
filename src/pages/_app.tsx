// Esse componente fica por volta da aplicação então o que for fixo da página vai nele
import { ChallengesProvider } from '../contexts/ChallengeContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp
