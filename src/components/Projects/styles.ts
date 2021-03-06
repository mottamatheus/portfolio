import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 120rem;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  padding-bottom: 6rem;
  margin: 0 auto;
  margin-top: 6rem;
  color: var(--text-secondary);

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 80%;
  margin-bottom: 5rem;
`;

export const ProjectsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 7rem;
`;

export const ImageDiv = styled(motion.a)`
  width: 60%;
  position: absolute;
  border-radius: 1rem;
  z-index: 1;
  height: 35rem;
  box-shadow: 2px 8px 16px 0 rgba(149, 11, 247, 0.05);
  min-height: 100%;
  background-size: cover;
  background-size: contain auto;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  @media (max-width: 1150px) {
    width: 100%;
  }

  img {
    width: 100%;
    z-index: -1;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  z-index: 5;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  height: 35rem;
  transition: all 0.2s ease;

  @media (max-width: 1150px) {
    width: 100%;
    background-color: rgba(10, 10, 10, 0.95);
    color: var(--text-primary);
    transition: all 0.2s ease;

    svg {
      color: var(--text-secondary);
    }
  }

  h4 {
    color: var(--text-secondary);
    font-size: 3.6rem;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.7rem;
    color: var(--text-primary);
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 3rem;
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17);

    @media (max-width: 1150px) {
      color: var(--text-primary);
      font-size: 1.5rem;
      background: none;
      padding: 0;
      box-shadow: none;
    }

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 2rem;
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1.2rem;
      align-items: center;
      justify-content: center;
    }

    li {
      display: inline-block;
      margin-right: 2rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  a {
    color: var(--text-primary);
    margin-right: 0.6rem;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const ExternalLink = styled.div`
  opacity: 0;
  height: 35rem;
  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.75),
    rgba(240, 240, 240, 0.75)
  );
  width: 100%;
  transition: all 0.2s ease;
  backdrop-filter: blur(2px);
  border-radius: 0.3rem;
  display: flex;

  svg {
    opacity: 0;
    display: flex;
    margin: auto;
    color: var(--text-secondary);
    transition: opacity 0.2s ease;
  }

  &:hover {
    opacity: 1;
  }
`;
