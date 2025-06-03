const initialState = 0;

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    default:
      return state;
  }
};

export default tempReducer;
