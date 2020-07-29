import postsReducer from './posts';

const reducers = ({ posts }, action={ type: '' }) => ({
    posts: postsReducer(posts, action),
});

export default reducers;