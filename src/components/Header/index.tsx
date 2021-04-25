/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';
import { english, portuguese } from '../../languages/index';

import { Container, Content, LinksList, Underline } from './styles';

const Navbar: React.FC = () => {
  const linkRef = useRef(false);
  const { locale } = useRouter();
  const { navbar } = english;
  const { navbarPT } = portuguese;

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const handleActive = () => {
    const { current } = linkRef;
    setActive(true);
    console.log(active);
  };

  return (
    <Container>
      <Content>
        <LinksList>
          <Link passHref href="/">
            <a role="presentation" onClick={handleActive}>
              Home
              <Underline />
            </a>
          </Link>
          <Link href="/projects">
            <a role="presentation" onClick={handleActive}>
              Projects
              <Underline />
            </a>
          </Link>
          <Link href="/contact">Contact</Link>
        </LinksList>
      </Content>
    </Container>
  );
};

export default Navbar;

/*
  <Link href="/projects">
            {locale === 'en' ? navbar[0] : navbarPT[0]}
          </Link>
          <Link href="/contact">
            {locale === 'en' ? navbar[2] : navbarPT[2]}
          </Link>
          */
