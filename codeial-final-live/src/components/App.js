import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchPosts  from '../actions/posts';
import PostsList from './PostsList';

class App extends React.Component {
  componentDidMount() {
  this.props.dispatch(fetchPosts()); // ✅ should return a function or action
}


  render() {
    const { posts } = this.props;
    return (
      <div className="app">
        {/* Navbar */}
        <nav className="nav">
          <div className="left-div">
            <img 
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" 
              alt="logo"
            />
          </div>

          <div className="search-container">
            <input placeholder="Search users or posts..." />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user-dp"
              id="user-dp"
            />
            <span>John Doe</span>
          </div>

          <div className="nav-links">
            <ul>
              <li>Log in</li>
              <li>Log out</li>
              <li>Register</li>
            </ul>
          </div>
        </nav>

        {/* Main Feed */}
        <div className="main-content">
          <div className="posts-section">
            <h2>Latest Posts</h2>
            <PostsList posts={posts} />
          </div>

          <div className="sidebar">
            <h3>Friends Online</h3>
            <ul>
              <li>Jane Smith</li>
              <li>Mark Johnson</li>
              <li>Alice Brown</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
