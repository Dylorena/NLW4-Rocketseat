// Esse componente fica por volta da aplicação então o que for fixo da página vai nele
import { useEffect } from 'react';
import '../styles/global.css';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page: window.location.pathname,
  });
}, []);
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
