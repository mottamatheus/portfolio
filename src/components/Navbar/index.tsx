/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { english, portuguese } from '../../languages/index';

import { Container, Content, Links } from './styles';

const languageOptions = [
  { key: 'portuguese', text: 'PT', value: 'portuguese' },
  { key: 'spanish', text: 'ES', value: 'spanish' },
  { key: 'english', text: 'EN', value: 'english' },
];

const Navbar: React.FC = () => {
  const { locale } = useRouter();
  const { navbar } = english;
  const { navbarPT } = portuguese;
  return (
    <Container>
      <Content>
        <Links>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/projects">
            <span>{locale === 'en' ? navbar[0] : navbarPT[0]}</span>
          </Link>
          <Link href="/contact">
            <span>{locale === 'en' ? navbar[2] : navbarPT[2]}</span>
          </Link>
        </Links>
      </Content>
    </Container>
  );
};

export default Navbar;
