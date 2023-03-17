import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const About: React.FC = () => {
  return ( 
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
  );
}

export default About;