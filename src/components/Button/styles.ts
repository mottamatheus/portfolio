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
`;
