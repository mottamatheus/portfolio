import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100rem;
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: var(--bg);
  border-radius: 10px;
`;

export const TextSection = styled.div`
  color: var(--text-primary);
  align-items: center;
  justify-content: center;
  width: 55%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  h1 {
    text-align: left;
    font-size: 6.4rem;
  }

  span {
    font-size: 3.2rem;
    color: var(--bg-card);
  }
`;
