import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaJs, FaReact, FaNodeJs, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';

import { english, portuguese } from '../../languages';
import {
  Button,
  Container,
  TextSection,
  MeSection,
  Technologies,
  SocialButton,
  Github,
} from './styles';

const Hero: React.FC = () => {
  const { locale } = useRouter();
  const { position, headline } = english;
  const { positionPT, headlinePT } = portuguese;

  return (
    <Container>
      <TextSection>
        <h1>Matheus Motta</h1>

        <h3>{locale === 'en' ? position : positionPT}</h3>
        <p>{locale === 'en' ? headline : headlinePT}</p>
      </TextSection>
      <Technologies>
        <span>
          <FaReact className="react" size={55} />
          <p>React</p>
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
      <MeSection>
        <Image src="/me2.png" alt="me" width={453} height={620} />
        <Link href="/projects">
          <Button
            initial={{ visibility: 'hidden', opacity: 0 }}
            animate={{
              visibility: 'visible',
              opacity: 1,
              x: [2, -2, 2],
            }}
            transition={{
              opacity: 1,
              repeat: Infinity,
              duration: 1,
            }}
          >
            <p>Meus projetos</p>
            <IoIosArrowForward size={25} />
          </Button>
        </Link>
<<<<<<< HEAD
        <Linkedin
          href="https://www.linkedin.com/in/motta-matheus/"
          rel="noreferrer"
          target="_blank"
=======
        <SocialButton
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029
          whileHover={{
            scale: 1.1,
            transition: {
              yoyo: Infinity,
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={50} />
        </SocialButton>
        <Github
          href="https://github.com/mottamatheus/"
          rel="noreferrer"
          target="_blank"
<<<<<<< HEAD
=======
          initial={{ visibility: 'hidden', opacity: 0 }}
          animate={{
            visibility: 'visible',
            opacity: 1,
          }}
          transition={{
            opacity: 1,
            delay: 2.5,
          }}
>>>>>>> 462ab6c51a865eb3f9b05e1b759e6699388a0029
          whileHover={{
            scale: 1.1,
            transition: {
              yoyo: Infinity,
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={50} />
        </Github>
      </MeSection>
    </Container>
  );
};

export default Hero;
