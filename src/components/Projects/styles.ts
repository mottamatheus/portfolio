import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 5.5rem auto 0;
  align-items: center;
  justify-content: center;
  padding-top: 3.5rem;
  border-radius: 1rem;
  max-width: 100rem;
`;

export const Text = styled.h1`
  color: var(--text-primary);
  font-size: 5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3.5rem;
  border-radius: 1.5rem;
  height: 35rem;
  background: var(--bg-card);
`;

export const About = styled.div`
  width: 50%;
  background-color: #000;
  height: 90%;
  padding: 1rem 2rem;

  h1 {
    font-size: 3rem;
  }
`;
