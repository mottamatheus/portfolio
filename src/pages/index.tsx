import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>matheus.motta - reactjs developer</title>
      </Head>
      <main>
        <Header />
        <Projects />
        <About />
      </main>
    </div>
  );
};

export default Home;
