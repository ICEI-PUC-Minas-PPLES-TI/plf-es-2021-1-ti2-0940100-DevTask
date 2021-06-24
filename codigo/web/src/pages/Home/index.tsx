import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const a = 'aaa';
  return (
    <div id="page-landing">
      <Link to="/login">${a}</Link>
    </div>
  );
};
