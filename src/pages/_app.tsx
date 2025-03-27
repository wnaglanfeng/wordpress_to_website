import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import B2top from 'components/B2top';
function MyApp({ Component, pageProps }: AppProps) {
  return <div> <Header /> <Component {...pageProps} /><B2top /> <Footer /> </div>;
}

export default MyApp;