/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Switch from 'react-switch';
import { RiMoonFill } from 'react-icons/ri';
import { HiSun } from 'react-icons/hi';
import { Dropdown } from 'semantic-ui-react';
import { english, portuguese } from '../../languages/index';

import { Container, Content, Links } from './styles';

const languageOptions = [
  { key: 'portuguese', text: 'PT', value: 'portuguese' },
  { key: 'spanish', text: 'ES', value: 'spanish' },
  { key: 'english', text: 'EN', value: 'english' },
];

const Navbar: React.FC = () => {
  const { locale } = useRouter();
  const { navbar } = english;
  const { navbarPT } = portuguese;
  return (
    <Container>
      <Content>
        <Links>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/projects">
            <span>{locale === 'en' ? navbar[0] : navbarPT[0]}</span>
          </Link>
          <Link href="/contact">
            <span>{locale === 'en' ? navbar[2] : navbarPT[2]}</span>
          </Link>
        </Links>
        {/* <Languages>
          <span className="portuguese">PT</span>
          <span>EN</span>
          <span>ES</span>
        </Languages> */}

        {/* <Switch
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
        /> */}
      </Content>
    </Container>
  );
};

export default Navbar;
