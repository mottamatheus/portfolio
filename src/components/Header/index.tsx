import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, TextSection } from './styles';

const Header: React.FC = () => {
  const openTemplateLiteral = '${';
  const closeTemplateLiteral = '}';
  return (
    <Container>
      <TextSection>
        {/* <h1>Hey, I&apos;m</h1> */}
        <h1>
          {openTemplateLiteral}
          <span>matheus.motta</span>
          {closeTemplateLiteral}
        </h1>

        <p>Desenvolvedor Front-End nascido na quarentena.</p>
        <div>
          <a
            href="https://github.com/mottamatheus/"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/motta-matheus/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </TextSection>
    </Container>
  );
};

export default Header;
