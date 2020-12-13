import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>matheus.motta - reactjs developer</title>
      </Head>
      <main>
        <Header />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
