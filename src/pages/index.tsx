import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Matheus Motta | FullStack Developer</title>
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
