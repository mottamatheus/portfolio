import React, { ReactNode } from 'react';

import { Container as LocalContainer } from './styles';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <LocalContainer>{children}</LocalContainer>;
}

export default Container;
