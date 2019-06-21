
const initialState = {}
export default TodoEntryReducer = (state = initialState, action) => {  
  switch (action.type) {    
    default:
      return Object.assign({}, state , action.payload);
  }
};
