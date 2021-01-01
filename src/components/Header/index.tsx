/* eslint-disable no-nested-ternary */
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';
import english from '../../languages/english';
import {
  Container,
  TextSection,
  MeSection,
  Technologies,
  Scroll,
} from './styles';
import Button from '../Button';

const Header: React.FC = () => {
  const { locale } = useRouter();
  const { header } = english;

  const greeting =
    locale === 'pt'
      ? 'Desenvolvedor FullStack'
      : locale === 'en'
      ? 'FullStack Developer'
      : 'FullStack Developer';

  return (
    <Container>
      <TextSection
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
      >
        <h1>Matheus Motta</h1>
        <h3>{greeting}</h3>
        <p>
          {locale === 'en'
            ? header
            : 'Olá! Sou de Porto Alegre e estou me especializando em desenvolver aplicações web performáticas, escaláveis e com foco na experiência de usuário. Crio soluções com:'}
        </p>
        <Technologies>
          <span>
            <FaReact size={55} />
            <p>ReactJS</p>
          </span>
          <span>
            <SiTypescript size={47} />
            <p>TypeScript</p>
          </span>
          <span>
            <SiNextDotJs size={47} />
            <p>Next.js</p>
          </span>
          <span>
            <FaJs size={50} />
            <p>JavaScript</p>
          </span>
          <span>
            <FaNodeJs size={47} />
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
        >
          <Button />
        </motion.span>
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
          <IoIosArrowForward />
        </Scroll>
      </Link>
    </Container>
  );
};

export default Header;
