import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords: string;
};

export default function BlogPost({ title, description, keywords }: Props) {
  return (
    <>
      <Head>
        <title>{title} - Matheus Motta </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
}
