import React from 'react';
import Head from 'next/head';
import MyProjects from '../components/Projects';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Projetos</title>
      </Head>
      <main>
        <MyProjects />
      </main>
    </div>
  );
}
