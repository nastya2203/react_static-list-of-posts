import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ list }) => (
  <div>
    {
      list.map(item => (
        <Post post={item} key={item.id} />
      ))}
  </div>
);

PostList.propTypes
  = { list: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default PostList;
