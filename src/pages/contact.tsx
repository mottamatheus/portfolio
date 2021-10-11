import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
}
