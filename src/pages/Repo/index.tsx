import React from 'react';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon, 
} from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to='/Aguirres.K'>
          Aguirres .K
        </Link>

        <span>/</span>

        <Link className={'reponame'} to='/Aguirres.K/youtube-content'>
          Youtube-content
        </Link>
        </Breadcrumb>
        <p>Contains all of my Youtube lessons code.</p>

        <Stats>
          <li>
            <StarIcon />
            <b>9</b>
            <span>Stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>12</b>
            <span>Forks</span>
          </li>
        </Stats>

        <LinkButton href={'https://github.com/kassiogto'}>
          <GithubIcon />
          <span>View on Github</span>
        </LinkButton>

    </Container>
  );
}

export default Repo;