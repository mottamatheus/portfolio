import React from 'react';
import { AppProps } from 'next/app';
import { AnimateSharedLayout, LazyMotion, domMax } from 'framer-motion';
import GlobalStyle from '../styles/global';
import Navbar from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <LazyMotion features={domMax}>
        <Navbar />
        <Component {...pageProps} />
        <GlobalStyle />
      </LazyMotion>
    </AnimateSharedLayout>
  );
};

export default MyApp;
