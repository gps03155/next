/* eslint-disable react/react-in-jsx-scope */
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";

// Component: pages/index
// pagaProps: getServerSideProps, getInitalProps, getStaticProps
const app = ({ Component, pageProps }: AppProps) => {
  console.log({ Component, pageProps });
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default app;
