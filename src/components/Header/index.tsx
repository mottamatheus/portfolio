import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
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
        <motion.p
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          Desenvolvedor Front-End nascido na quarentena.
        </motion.p>
        <motion.div
          whileHover={{
            scale: 1.15,
            transition: {
              yoyo: Infinity,
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://github.com/mottamatheus/"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.15,
            transition: {
              yoyo: Infinity,
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/motta-matheus/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </TextSection>
      {/* <Technologies>
        <FaReact />
      </Technologies> */}
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
