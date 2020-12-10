import React from 'react';
import { Container, TextSection } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TextSection>
        <h1>Hey, I&apos;m</h1>
        <h1>Matheus Motta</h1>
        <span>Desenvolvedor Front-End nascido na pandemia.</span>
      </TextSection>
    </Container>
  );
};

export default Header;
