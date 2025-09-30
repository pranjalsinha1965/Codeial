import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;

    if (!posts || posts.length === 0)
    {
        return <p>No posts to show...</p>
    }

    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="user-pic"
                  width="40"
                />
                <div>
                  <span className="post-author">{post.user?.name || 'Unknown'}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="likes-icon"
                    width="20"
                  />
                  <span>{post.likes?.length || 0}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                    alt="comments-icon"
                    width="20"
                  />
                  <span>{post.comments?.length || 0}</span>
                </div>
              </div>

              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                {post.comments?.map((c, i) => (
                    <div className="post-comments-item" key={i}>
                    <div className="post-comment-header">
                      <span className="post-comment-author">{c.user?.name || 'Anon'}</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">{c.likes?.length || 0}</span>
                    </div>
                    <div className="post-comment-content">{c.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired, 
};

export default PostsList;

