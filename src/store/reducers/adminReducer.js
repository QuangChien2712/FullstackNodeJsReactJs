import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("Chien fetch gender start: ", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      console.log("Chien fetch gender success: ", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAIDED:
      console.log("Chien fetch gender faided: ", action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;

// const appReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADMIN_LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//         adminInfo: action.adminInfo,
//       };
//     case actionTypes.ADMIN_LOGIN_FAIL:
//       return {
//         ...state,
//         isLoggedIn: false,
//         adminInfo: null,
//       };
//     case actionTypes.PROCESS_LOGOUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//         adminInfo: null,
//       };
//     default:
//       return state;
//   }
// };

// export default appReducer;
