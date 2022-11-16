import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { useEffect } from 'react';

/**
 * Component: pages/index.tsx
 * pageProps: getServerSideProps, getStaticProps, getInitialProps
 */
export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   throw Error();
  // }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
