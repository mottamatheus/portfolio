import React from 'react';
import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
