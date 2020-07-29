import React from 'react';
import { Layout } from 'antd';
//import 'antd/dist/antd.css';
import './App.css';
import Provider from './store';
import Navigation from './navigation';

const App = () => {
  
  return (
    <Layout>
      <Provider>
        <Navigation/>
      </Provider>
    </Layout>
  )
};

export default App;

