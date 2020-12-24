import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  background-color: var(--bg-card);
  position: absolute;
  margin: auto;
`;

export const Content = styled.div`
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const Links = styled.div`
  font-size: 1.6rem;
  font-family: 'Roboto Mono', monospace;

  span {
    margin-left: 3rem;
  }
`;
