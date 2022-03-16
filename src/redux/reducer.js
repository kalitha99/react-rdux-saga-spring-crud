import * as types from "./actionType";

const initialstate = {
  users: [],
  loading: false,
  error: null,
};

const userRducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
    case types.CREATE_USER:
    case types.DELETE_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.LOAD_USER_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default userRducer;