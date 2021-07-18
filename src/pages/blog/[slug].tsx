import React from 'react';
import Head from 'next/head';
import { gql, request } from '../../utils/request';
import { PostFragment } from '../../utils/fragments/post';

type Props = {
  title: string;
  description: string;
  keywords: string;
};

type SlugProps = {
  slug: string;
};

type StaticProps = {
  params: SlugProps;
};

export default function BlogPost({ title, description, keywords }: Props) {
  console.log(title);
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

const allBlogPosts = gql`
  {
    allArticles {
      createdAt
      title
      slug
      tags {
        description
      }
      content {
        value
      }
    }
  }
`;

const singleBlogPost = (slug: string) => gql`
  {
    allArticles {
      createdAt
      title
      slug
      tags {
        description
      }
      content {
        value
      }
    }
  }
`;

export async function getStaticPaths() {
  const { allArticles } = await request(allBlogPosts);

  const paths = allArticles.map(({ slug }: SlugProps) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const {
    allArticles: [{ title, content }],
  } = await request(singleBlogPost(slug));

  return {
    props: { title, content },
  };
}
