import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Matheus Motta | FrontEnd Developer</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
