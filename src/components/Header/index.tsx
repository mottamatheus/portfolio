/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';
import { english, portuguese } from '../../languages';
import {
  Container,
  TextSection,
  MeSection,
  Technologies,
  Scroll,
} from './styles';
=======
import { english, portuguese } from '../../languages/index';
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029

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
<<<<<<< HEAD
      <TextSection
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
        exit={{ opacity: 0 }}
      >
        <h1>Matheus Motta</h1>
        <h3>{locale === 'en' ? position : positionPT}</h3>
        <p>{locale === 'en' ? headline : headlinePT}</p>
        <Technologies>
          <span>
            <FaReact className="react" size={55} />
            <p>ReactJS</p>
          </span>
          <span>
            <SiTypescript className="typescript" size={47} />
            <p>TypeScript</p>
          </span>
          <span>
            <SiNextDotJs className="next" size={47} />
            <p>Next.js</p>
          </span>
          <span>
            <FaJs className="javascript" size={50} />
            <p>JavaScript</p>
          </span>
          <span>
            <FaNodeJs className="node" size={47} />
            <p>Node.js</p>
          </span>
        </Technologies>
      </TextSection>
      <MeSection
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 120 }}
      >
        <Image src="/me.png" alt="me" width={500} height={620} />
        <motion.span
          initial={{ x: -135, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 120 }}
        ></motion.span>
      </MeSection>
      <Link href="/projects">
        <Scroll
          initial={{ visibility: 'hidden', opacity: 0 }}
          animate={{ visibility: 'visible', opacity: 1, x: [10, -10, 10] }}
          transition={{
            opacity: 1,
            delay: 2.5,
            repeat: Infinity,
            duration: 1,
          }}
        >
          {locale === 'en' ? cta : ctaPT}
          <IoIosArrowForward />
        </Scroll>
      </Link>
=======
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
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029
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
