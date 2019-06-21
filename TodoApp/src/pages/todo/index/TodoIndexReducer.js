
const initialState = {}
export default TodoIndexReducer = (state = initialState, action) => {  
  switch (action.type) {    
    default:
      return Object.assign({}, state , action.payload);
  }
};
