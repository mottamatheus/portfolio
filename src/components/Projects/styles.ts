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
  background: rgba(75, 101, 132, 0.6);
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgba(46, 54, 68, 0.03);
`;

export const About = styled.div`
  color: var(--bg-card);
  width: 50%;
  height: 90%;
  padding: 1rem 2rem;

  h1 {
    font-size: 3.5rem;
  }

  span {
    font-size: 2rem;
  }
`;
