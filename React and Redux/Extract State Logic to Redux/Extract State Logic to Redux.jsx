// Define ADD, addMessage(), messageReducer(), and store here:// Define ADD action type
const ADD = 'ADD';

// Define action creator addMessage
const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

// Define the messageReducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]; // Use spread operator to create a new array with the new message appended
    default:
      return state;
  }
};

// Create Redux store and pass in the messageReducer
const store = Redux.createStore(messageReducer);
