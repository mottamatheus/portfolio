import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords: string;
};

function Blog({ title = 'Meu blog', description, keywords }: Props) {
  return (
    <>
      <Head>
        <title>{title} - Matheus Motta </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <h1>{title}</h1>
    </>
  );
}

export default Blog;
