import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Tooltip } from './styles';

const Button: React.FC = () => {
  const [copied, setCopied] = useState(false);

  return (
    <Container>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://github.com/mottamatheus/"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={80} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://www.linkedin.com/in/motta-matheus/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin size={80} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <CopyToClipboard
          text="matheusmottaq@gmail.com"
          onCopy={() => setCopied(!copied)}
        >
          <span>
            <MdMail size={80} />
          </span>
        </CopyToClipboard>
      </motion.div>
      {copied ? <Tooltip>Copiado para área de transferência!</Tooltip> : null}
    </Container>
  );
};

export default Button;
