import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs, SiStyledComponents } from 'react-icons/si';
import { Container, TextSection, MeSection, Technologies } from './styles';
import Button from '../Button';

const Header: React.FC = () => {
  const openTemplateLiteral = '${';
  const closeTemplateLiteral = '}';

  return (
    <Container>
      <TextSection>
        {/* <h1>Hey, I&apos;m</h1> */}

        <motion.h1
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
        >
          {openTemplateLiteral}
          <span>matheus.motta</span>
          {closeTemplateLiteral}
        </motion.h1>
        <motion.h3
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          Desenvolvedor Front-End
        </motion.h3>
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
        <span>
          <Button />
        </span>
      </MeSection>
    </Container>
  );
};

export default Header;
