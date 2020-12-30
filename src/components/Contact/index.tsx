import React from 'react';

import { Container, Form } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <Form>
        <input id="name" name="name" type="text" placeholder="Your name" />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <input id="subject" name="subject" type="text" placeholder="Subject" />
        <textarea
          name="description"
          placeholder="Descrição"
          spellCheck="false"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default Contact;
