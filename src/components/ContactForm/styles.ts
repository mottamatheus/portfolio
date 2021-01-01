import styled from 'styled-components';

export const Container = styled.div`
  height: 95vh;
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

export const Form = styled.form`
  display: flex;
  width: 60rem;
  max-width: 70vw;
  flex-direction: column;

  input {
    color: var(--text-primary);
    background-color: var(--bg-card);
    border: none;
    padding: 1.6rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  textarea {
    color: var(--text-primary);
    resize: none;
    border: none;
    padding: 1.6rem;
    background-color: var(--bg-card);
    border-radius: 0.5rem;
    height: 30rem;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    padding: 1.6rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--text-primary);
    background-color: var(--text-secondary);
  }
`;
