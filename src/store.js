import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
