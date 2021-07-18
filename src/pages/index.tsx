import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matheus Motta | FullStack Developer</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
