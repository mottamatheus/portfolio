import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

export default function About() {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Sobre Mim</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
