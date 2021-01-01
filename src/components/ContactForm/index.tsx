import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form } from './styles';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleServerResponse = (ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xzbkkqap',
      data: inputs,
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const handleOnChange = (e: any) => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  return (
    <Container>
      <h1>Contact</h1>
      <Form onSubmit={handleOnSubmit}>
        <input
          required
          id="name"
          name="name"
          type="text"
          onChange={handleOnChange}
          value={inputs.name}
          placeholder="Your name"
        />
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="Email Address"
        />
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={handleOnChange}
          required
          value={inputs.subject}
        />
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="Descrição"
          spellCheck="false"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default ContactForm;
