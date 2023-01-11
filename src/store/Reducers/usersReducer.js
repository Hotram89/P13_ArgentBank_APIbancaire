/* eslint-disable default-case */
const INITIAL_STATE = {
  firstName: "Marc",
  lastName: "Dupont",
  token: "",
};

function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_ADD": {
      return { ...state, firstName: "Julien" };
    }

    case "USER_GET": {
      return { ...state, lastName: "Moulin" };
    }
  }
  return state;
}

export default usersReducer;
