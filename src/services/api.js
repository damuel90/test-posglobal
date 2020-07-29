import axios from 'axios';

const urlBase = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get(`${urlBase}/posts`);

export const getCommentsPost = (postId) => axios.get(`${urlBase}/posts/${postId}/comments`);

