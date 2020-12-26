import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  z-index: 4;
  transition: all 0.2s ease;

  a {
    color: var(--text-primary);
    transition: all 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }

  span {
    transition: all 0.2s ease;

    cursor: pointer;
    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const Tooltip = styled.div`
  background-color: var(--text-secondary);
  transition: all 0.2s ease;
  padding: 1rem;
  border-radius: 0.5rem;
  position: absolute;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
