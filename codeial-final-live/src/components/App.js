import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { fetchPosts } from '../actions/posts';
import  PostsList from './PostsList';
import Navbar from './Navbar';

const Login = () => (
  <div>Login</div>
)

const Signup = () => {
  <div>Login</div>
}

const Home = () => {
  <div>Login</div>
}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar/>
          <PostsList posts={posts}/>
          <Route path = "/" component = {Home} />
          <Route path = "/login" component = {Login} />
          <Route path = "/signup" component = {Signup} />
        </div>
      </Router>
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
