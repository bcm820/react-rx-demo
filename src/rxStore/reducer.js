function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_CONTROL':
      return {
        ...state,
        ...action.payload
      };

    case 'SET_PRESET':
      return {
        ...action.payload,
        mirror: state.mirror
      };

    case 'SET_TO_CUSTOM':
      return {
        ...state,
        name: 'custom'
      };

    default:
      return state;
  }
}

export default reducer;
