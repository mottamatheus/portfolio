import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Contato</title>
      </Head>
      <main>
        <ContactForm />
      </main>
    </div>
  );
};

export default Home;
