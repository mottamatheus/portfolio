import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  padding-bottom: 6rem;
  margin: 0 auto;
  color: var(--text-secondary);

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 60rem;
  max-width: 70vw;
  border-radius: 1rem;
  padding: 2rem;

  flex-direction: column;

  input {
    font-family: 'Roboto Mono', monospace;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12);
    backdrop-filter: blur(1.5rem);
    border: none;
    padding: 1.6rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    font-size: 1.8rem;
    color: var(--text-primary);
    resize: none;
    border: none;
    padding: 1.6rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12);
    backdrop-filter: blur(1.5rem);
    border-radius: 1rem;
    height: 30rem;
    margin-bottom: 1rem;
  }

  button {
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    padding: 2rem;
    border-radius: 1rem;
    border: none;
    color: var(--bg-card);
    background: linear-gradient(
      -45deg,
      rgba(179, 55, 113, 0.85),
      rgba(179, 55, 161, 0.85)
    );
    box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.12),
      inset 0 2px 3px rgba(181, 123, 173, 0.8);
  }
`;

export const Bubble = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #eee;
  position: absolute;
  border-radius: 50%;
  width: 11rem;
  height: 11rem;
  margin-left: 55rem;
  margin-bottom: 4rem;
  background: linear-gradient(
    -35deg,
    rgba(140, 111, 247, 0.3),
    rgba(255, 34, 102, 0.3)
  );
  box-shadow: 10px 8px 32px 0 rgba(179, 55, 113, 0.1);
  z-index: -1;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 0.4rem;
  }
`;
