import React from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Matheus Motta | Projetos</title>
      </Head>
      <main>
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
