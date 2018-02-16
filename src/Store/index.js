import { combineReducers, createStore } from 'redux';

// RootReducer
import rootReducer from '../Reducers/indexReducer';

// Data OR API Call
import comments from '../data/comments'
import posts from '../data/posts';

const defaultState = {
  posts: posts,
  comments: comments,
}

const Store = createStore(rootReducer, defaultState)

export default Store;
