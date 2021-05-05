/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';
import { english, portuguese } from '../../languages/index';

import { Container, Content, LinksList, Underline } from './styles';

const Navbar: React.FC = () => {
  const ref = useRef();
  const { locale, pathname } = useRouter();
  const { navbar } = english;
  const { navbarPT } = portuguese;
  // const { current } = linkRef;

  const [active, setActive] = useState('');

  const handleActive = useEffect(() => {
    setActive(pathname);
    console.log(pathname);
  }, [pathname]);

  const MotionLink = m(Link);

  const pathNames = ['/', '/projects', '/contact'];

  return (
    <Container>
      <Content>
        <LinksList>
          <Link passHref href="/">
            <a onClick={() => handleActive} role="presentation">
              Home
              <Underline
                pathname={pathname}
                active={active}
                layoutId="underline"
              />
              <m.span layoutId="underline" />
            </a>
          </Link>
          <Link href="/projects">
            <a onClick={() => handleActive} role="presentation">
              Projects
              <Underline
                pathname={pathname}
                active={active}
                layoutId="underline"
              />
            </a>
          </Link>
          <Link href="/contact">
            <a onClick={() => handleActive} role="presentation">
              Contact
              <Underline
                pathname={pathname}
                active={active}
                layoutId="underline"
              />
            </a>
          </Link>
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
