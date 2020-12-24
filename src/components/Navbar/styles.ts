import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  background-color: var(--bg-card);
  position: absolute;
  justify-content: center;
  margin: auto;
  font-size: 1.6rem;
  font-family: 'Roboto Mono', monospace;
`;

export const Content = styled.div`
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
`;

export const Links = styled.div`
  span {
    margin-right: 3rem;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const Languages = styled.div`
  span {
    cursor: pointer;
    margin-right: 1.6rem;
  }
`;
