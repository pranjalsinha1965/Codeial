import React, { useState } from 'react';

const PostsList = ({ posts }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => setCommentText(e.target.value);

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div className="post-wrapper" key={post._id}>
          <div className="post-header">
            <div className="post-avatar">
              <img
                src={post.user.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                alt="user-pic"
              />
              <div>
                <span className="post-author">{post.user.name}</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>

            <div className="post-content">{post.content}</div>

            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                  alt="likes-icon"
                />
                <span>{post.likes?.length || 0}</span>
              </div>

              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                  alt="comments-icon"
                />
                <span>{post.comments?.length || 0}</span>
              </div>
            </div>

            <div className="post-comment-box">
              <input
                placeholder="Start typing a comment"
                value={commentText}
                onChange={handleCommentChange}
              />
            </div>

            <div className="post-comments-list">
              {post.comments?.map((comment) => (
                <div className="post-comments-item" key={comment._id}>
                  <div className="post-comment-header">
                    <span className="post-comment-author">{comment.user.name}</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">{comment.likes?.length || 0}</span>
                  </div>
                  <div className="post-comment-content">{comment.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
