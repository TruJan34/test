const initialState = 0;
function commentsReducer(state=initialState, action) {
  console.log(state, action);
  return state;
}

export default commentsReducer;