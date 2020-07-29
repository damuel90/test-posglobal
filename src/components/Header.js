import React from 'react';
import { Layout, Button } from 'antd';

const Header = () => {
  
  return (
    <Layout.Header className='header'>
      <h1>Publicaciones</h1>
      <Button>Crear Publicacion</Button>
    </Layout.Header>
  )
};

export default Header;