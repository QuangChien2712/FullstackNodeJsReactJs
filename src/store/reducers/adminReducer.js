import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return { ...copyState };
    // console.log("Chien fetch gender start: ", action);
    // return {
    //   ...state,
    // };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    // let copyState = { ...state };
    // copyState.genders = action.data;
    // console.log("Chien fetch gender success: ", copyState);
    // return {
    //   ...copyState,
    // };
    case actionTypes.FETCH_GENDER_FAILDED:
      state.isLoadingGender = false;
      state.genders = [];
      // console.log("Chien fetch gender FAILDED: ", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_FAILDED:
      state.positions = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_FAILDED:
      state.roles = [];
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
