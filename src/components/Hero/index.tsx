import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaJs, FaReact, FaNodeJs, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';
import { english, portuguese } from '../../languages';
import {
  Bubble,
  Container,
  TextSection,
  MeSection,
  Technologies,
  Linkedin,
  Github,
} from './styles';

const Hero: React.FC = () => {
  const { locale } = useRouter();
  const { position, headline, cta } = english;
  const { positionPT, headlinePT, ctaPT } = portuguese;

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
          <Bubble
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
          </Bubble>
        </Link>
        <Linkedin
          href="https://www.linkedin.com/in/motta-matheus/"
          rel="noreferrer"
          target="_blank"
          whileHover={{
            scale: 1.1,
            transition: {
              yoyo: Infinity,
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={50} />
        </Linkedin>
        <Github
          href="https://github.com/mottamatheus/"
          rel="noreferrer"
          target="_blank"
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
