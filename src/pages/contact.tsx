import React from 'react';
import Head from 'next/head';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Contato</title>
      </Head>
      <main>
        <Contact />
      </main>
    </div>
  );
};

export default Home;
