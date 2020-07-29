import React, { useEffect, useState } from 'react';
import { Layout, Comment } from 'antd';
import CardPost from '../components/CardPost';
import { getCommentsPost } from '../services/api';

const PostDetails = ({ location }) => {
  const [comments, setComments] = useState([]);

  const getAllComments = async () => {
    const response = await getCommentsPost(location.state.id);
    console.log(response);
    setComments(response.data)
  }

  useEffect(() => {
    getAllComments();
  }, location)

  return (
    <Layout.Content className='details'>
      <div className='aside'>
        <CardPost {...location.state} />
      </div>
      <div className='main'>
        {comments.map(comment => (
          <Comment
            author={<a>{comment.name}</a>}
            content={
              <p>
               {comment.body}
              </p>
            }
        />
        ))}
      </div>
    </Layout.Content>
  )
};

export default PostDetails;