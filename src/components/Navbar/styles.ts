import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  align-items: center;
  color: var(--text-primary);
  justify-content: center;
  margin: auto;
  font-size: 1.8rem;
`;

export const Content = styled.div`
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
`;

export const Links = styled.div`
  span,
  a {
    font-weight: 600;
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

  .portuguese {
    color: var(--color-primary);
    padding: 3px 5px;
    border-radius: 5px;
    background-color: #222;
  }
`;
