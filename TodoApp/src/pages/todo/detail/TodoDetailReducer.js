
const initialState = {}
export default TodoDetailReducer = (state = initialState, action) => {  
  switch (action.type) {    
    default:
      return Object.assign({}, state , action.payload);
  }
};
