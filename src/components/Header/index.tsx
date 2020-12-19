import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs, SiStyledComponents } from 'react-icons/si';
import { BiChevronsDown } from 'react-icons/bi';
import {
  Container,
  TextSection,
  MeSection,
  Technologies,
  Scroll,
} from './styles';
import Button from '../Button';

const Header: React.FC = () => {
  const openTemplateLiteral = '${';
  const closeTemplateLiteral = '}';
  const scrollDown = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <TextSection
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
      >
        <motion.h1>Matheus Motta</motion.h1>
        <motion.h3>Desenvolvedor Front-End</motion.h3>
        <motion.p>
          Olá! Sou de Porto Alegre e estou me especializando em desenvolver
          aplicações web performáticas, escaláveis e com foco na experiência de
          usuário. Crio soluções com:
        </motion.p>
        <Technologies
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
        >
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
      <Scroll
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible', y: [10, -10, 10] }}
        transition={{ delay: 2.5, repeat: Infinity, duration: 1 }}
      >
        <BiChevronsDown onClick={scrollDown} />
      </Scroll>
    </Container>
  );
};

export default Header;
