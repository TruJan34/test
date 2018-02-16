import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './postsReducer';
import comments from './commentsReducer';
import test from './testReducer';

const rootReducer = combineReducers({
  posts, comments, test, router: routerReducer
});

export default rootReducer;