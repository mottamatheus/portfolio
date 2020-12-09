import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 80vh;
  margin: 55px auto 0;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #12e588;
  border-radius: 10px;

  h1 {
    text-align: center;
    width: 50%;
  }
`;

export const Card = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 3em;
  border-radius: 3em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(40px);
`;
