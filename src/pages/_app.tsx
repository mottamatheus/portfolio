import React from 'react';
import { AppProps } from 'next/app';
<<<<<<< HEAD
import { AnimateSharedLayout } from 'framer-motion';
import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';
=======
import { AnimateSharedLayout, LazyMotion, domMax } from 'framer-motion';
import GlobalStyle from '../styles/global';
import Navbar from '../components/Header';
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
=======
    <AnimateSharedLayout>
      <LazyMotion features={domMax}>
        <Navbar />
        <Component {...pageProps} />
        <GlobalStyle />
      </LazyMotion>
    </AnimateSharedLayout>
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029
  );
}
