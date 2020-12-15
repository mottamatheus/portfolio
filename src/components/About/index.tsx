import React from 'react';

import { Container, Text } from './styles';

const About: React.FC = () => {
  const openTemplateLiteral = '${';
  const closeTemplateLiteral = '}';
  return (
    <Container>
      <Text>
        {openTemplateLiteral}
        <span>sobre</span>
        {closeTemplateLiteral}
      </Text>
    </Container>
  );
};

export default About;
