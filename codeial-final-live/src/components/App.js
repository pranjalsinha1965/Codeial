import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import  PostsList  from './PostsList';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img src = "https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt = "logo"/>
          </div>
          <div className="search-container">
            <img 
            className="search-icon"></img>
            <input placeholder="Search"/>
          </div>
          <div className="search-container"></div>
          <div className="right-nav"></div> 
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts, 
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired, 
}

export default connect(mapStateToProps)(App);

