// Esse componente fica por volta da aplicação então o que for fixo da página vai nele
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
