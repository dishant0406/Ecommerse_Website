const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, action){

  switch (action.type) {

    case 'SER_CURRENT_USER':
      return {
        ...state,
        currentUser = action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;