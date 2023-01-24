import { UPDATE_USER } from '../constants';

const userReducer = function (prevState = {}, action) {
  const { type, payload } = action;
  Object.freeze(prevState); // prevents us from accidentally mutating state

  switch (type) {
    case UPDATE_USER: {
      const newState = { ...prevState };

      if (payload.new_user.length > 1) {
        newState.push({ name: payload.new_user });
      }

      // if (payload.new_user < 0) payload.quantity = 0;
      // if (payload.id in newState) {
      //     // newState[payload.id].quantity = payload.quantity;

      //     //! Create a copy of the state that changes to trigger re-render
      //     // React-redux wraps things and memoizes... see React DevTools
      //     newState[payload.id] = {
      //         ...newState[payload.id],
      //         quantity: payload.quantity,
      //     };
      // } else {
      //     newState[payload.id] = payload;
      // }

      return newState;
    }
    default:
      return prevState;
  }
};

export default userReducer;
