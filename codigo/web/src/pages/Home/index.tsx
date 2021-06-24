import React from 'react';

import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Home | DevTask</title>
        <meta
          name="description"
          content="Bem-vindo à DevTask, sua plataforma para conectar desenvolvedores e empresas."
        />
      </Helmet>
      ...
    </div>
  );
}
