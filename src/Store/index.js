import { combineReducers, createStore } from 'redux';
import axios from 'axios';

var apiURL = 'https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json'

// RootReducer
import rootReducer from '../Reducers/indexReducer';

// Data OR API Call
import comments from '../data/comments'
import posts from '../data/posts';
// import test from '../data/test';

// scapic api


const defaultState = {
  posts: posts,
  comments: comments,
  // test: test,
}

const Store = createStore(rootReducer, defaultState)

export default Store;
