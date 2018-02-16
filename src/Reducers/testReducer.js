const initialState = [];
function testReducer(state= initialState, action) {
  console.log("test-reducer"+ state)
  return state;
}

export default testReducer;