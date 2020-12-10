import React from 'react';
import { Container, Card, Text, About } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <Text>Meus projetos</Text>
      <Card>
        <About>
          <h1>oi</h1>
          <h1>oi</h1>
        </About>
        <About>
          <h1>Siberian</h1>
          <h1>oi</h1>
        </About>
      </Card>
      <Card />
      <Card />
    </Container>
  );
};

export default Projects;
