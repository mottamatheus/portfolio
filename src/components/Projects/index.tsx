import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';
import {
  Container,
  Title,
  Text,
  ProjectsContainer,
  ImageDiv,
  About,
  ExternalLink,
} from './styles';
import { english, portuguese } from '../../languages';
import siberianImg from '../../assets/siberian.png';
import skilldevImg from '../../assets/skilldev.png';
import goPets from '../../assets/gopets.png';
import elleosImg from '../../assets/elleos.png';

const Projects: React.FC = () => {
  const { locale } = useRouter();
  const { gopets, skilldev, siberian, elleos, projectsName } = english;
  const projects = [
    {
      id: 1,
      title: 'GoPets',
      description:
        locale === 'en'
          ? gopets
          : 'GoPets é uma plataforma de agendamento de banho e tosa para pet shops. Ao fazer login e ser autorizado pelo servidor, o usuário pode ver em sua agenda quais agendamentos possui para o dia e os horários disponíveis, facilitando a organização da pet shop. Os clientes também podem cadastrar seus pets e fazer agendamentos pela plataforma.',
      technologies: ['React.js', 'Typescript', 'Node.js', 'SQLite', 'REST API'],
      repository: 'https://github.com/mottamatheus/gopets',
      website: 'https://github.com/mottamatheus/gopets',
      image: `${goPets}`,
    },
    {
      id: 4,
      title: 'SkillDev',
      description:
        locale === 'en'
          ? skilldev
          : 'Landing page de uma startup fictícia chamada SkillDev, a qual venderia uma plataforma de gerenciamento de times. Foi desenvolvida em React.js com Typescript com hospedagem no Firebase. As ilustrações são do site UI8.',
      technologies: ['React.js', 'Typescript', 'styled-components', 'Firebase'],
      repository: 'https://github.com/mottamatheus/skilldev',
      website: 'https://mottaskilldev.firebaseapp.com/',
      image: `${skilldevImg}`,
    },
    {
      id: 2,
      title: 'Siberian',
      description:
        locale === 'en'
          ? siberian
          : 'O conceito desse projeto é uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['React.js', 'Firebase', 'Stripe', 'CSS'],
      repository: 'https://github.com/mottamatheus/siberian',
      website: 'https://challenge-5f5c1.web.app/',
      image: `${siberianImg}`,
    },
    {
      id: 3,
      title: 'Elleos',
      description:
        locale === 'en'
          ? elleos
          : 'A elleos é uma plataforma que busca conectar instituições beneficentes e voluntários que queiram ajudar. Possui versão web e mobile, onde é possível cadastrar instituições ou consultar informações sobre elas. Ambas versões estão conectadas ao mesmo backend, facilitando o compartilhamento de informações entre as plataformas.',
      technologies: [
        'Typescript',
        'React.js',
        'React Native',
        'Node.js',
        'CSS',
      ],
      repository: 'https://github.com/mottamatheus/elleos',
      website: 'https://github.com/mottamatheus/elleos',
      image: `${elleosImg}`,
    },
  ];
  return (
    <Container>
      <Title>{locale === 'en' ? projectsName : 'Meus projetos'}</Title>
      <Text>
        Selecionei alguns projetos de destaque que desenvolvi. Pretendo
        atualizar e adicionar novos projetos conforme for fazendo. Você pode dar
        uma olhada no que ando desenvolvendo no meu Github.
      </Text>
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <ProjectsContainer
            key={project.id}
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <About
              style={{
                textAlign: 'right',
                alignItems: 'flex-end',
              }}
              key={project.id}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={project.repository}>
                  <FiGithub size={35} />
                </a>
                <a target="_blank" rel="noreferrer" href={project.website}>
                  <FiExternalLink size={35} />
                </a>
              </div>
            </About>
            <ImageDiv
              style={{
                left: 0,
                backgroundImage: `var(--image-shade), url(${project.image})`,
              }}
              href={project.website}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink>
                <FiExternalLink size={75} />
              </ExternalLink>
            </ImageDiv>
          </ProjectsContainer>
        ) : (
          <ProjectsContainer
            key={project.id}
            style={{
              justifyContent: 'flex-start',
            }}
          >
            <About
              style={{
                textAlign: 'left',
                alignItems: 'flex-start',
              }}
              key={project.id}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={project.repository}>
                  <FiGithub size={35} />
                </a>
                <a target="_blank" rel="noreferrer" href={project.website}>
                  <FiExternalLink size={35} />
                </a>
              </div>
            </About>
            <ImageDiv
              style={{
                right: 0,
                backgroundImage: `var(--image-shade), url(${project.image})`,
              }}
              href={project.website}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink>
                <FiExternalLink size={75} />
              </ExternalLink>
            </ImageDiv>
          </ProjectsContainer>
        ),
      )}
    </Container>
  );
};

export default Projects;
