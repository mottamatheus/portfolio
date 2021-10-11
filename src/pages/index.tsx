import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

<<<<<<< HEAD
export default function Home() {
=======
export const Home: React.FC = () => {
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029
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
