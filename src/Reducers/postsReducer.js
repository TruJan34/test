const initialState = [];
function postsReducer(state=initialState, action) {
  console.log("The post will Change");
  console.log(state, action);
  return state;
}

export default postsReducer;