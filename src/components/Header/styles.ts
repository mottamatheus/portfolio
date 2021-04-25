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

export const LinksList = styled.div`
  a {
    display: inline-block;
    position: relative;
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    margin-right: 3rem;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const Underline = styled.span`
  position: absolute;
  width: 100%;
  background: blue;
  height: 2px;
  left: 0;
  bottom: -15%;
`;
