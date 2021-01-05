import React from 'react';
import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/themes';
import Navbar from '../components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default MyApp;
