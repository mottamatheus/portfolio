import React from 'react';
import Link from 'next/link';
import Switch from 'react-switch';
import { RiMoonFill } from 'react-icons/ri';
import { HiSun } from 'react-icons/hi';

import { Container, Content, Links, Languages } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Links>
          <span>Portfólio</span>
          <span>Sobre Mim</span>
          <span>Contato</span>
        </Links>
        <Languages>
          <span>PT</span>
          <span>EN</span>
          <span>ES</span>
        </Languages>
        <Switch
          checked
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
              }}
            >
              <RiMoonFill />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                color: '#2a2e2e',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
              }}
            >
              <HiSun />
            </div>
          }
          handleDiameter={30}
          height={28}
          width={55}
          onColor="#eb3b5a"
          offColor="#eceaea"
          onChange={() => console.log('oi, mottinha')}
        />
      </Content>
    </Container>
  );
};

export default Navbar;
