import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { getPosts } from '../services/api';
import CardPost from '../components/CardPost';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const response = await getPosts();
    setPosts(response.data)
  }

  useEffect(() => {
    getAllPosts()
  })

  return (
    <Layout.Content className='container'>
      {posts.map(post => <CardPost className='card'  key={post.id} {...post} />)}
    </Layout.Content>
  )
};

export default Home;