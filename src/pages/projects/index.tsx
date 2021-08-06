import React from 'react';
import Head from 'next/head';
import MyProjects from '../../components/Projects';

type Props = {
  title: string;
  description: string;
};

export default function Projects({ title, description }: Props) {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Projetos</title>
      </Head>
      <main>
        <h1>Meus projetos {title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          voluptatum?
        </p>
        <MyProjects />
      </main>
    </div>
  );
}
