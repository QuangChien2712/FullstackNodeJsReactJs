import actionTypes from "./actionTypes";
import {
  getAllcodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
} from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = (await getAllcodeService("GENDER")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed());
      console.log("fetchGenderStart error ", error);
    }
  };
};

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = (await getAllcodeService("POSITION")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed());
      console.log("fetchPositionStart error ", error);
    }
  };
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      // dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = (await getAllcodeService("ROLE")).data;
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleStart error ", error);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILDED,
});

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILDED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILDED,
});

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = (await createNewUserService(data)).data;
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
        toast.success("Create a new user succeed!");
      } else {
        dispatch(saveUserFailded());
      }
    } catch (error) {
      dispatch(saveUserFailded());
      console.log("saveUserFailded error: ", error);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailded = () => ({
  type: actionTypes.CREATE_USER_FAILDED,
});

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = (await getAllUsers("All")).data;
      console.log("Chien fetch: ", res);
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        toast.error("Fetch all users error!");
        dispatch(fetchAllUsersFailded());
      }
    } catch (error) {
      toast.error("Fetch all users error!");
      dispatch(fetchAllUsersFailded());
      console.log("fetchAllUsersFailded error: ", error);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFailded = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILDED,
});

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = (await deleteUserService(userId)).data;
      if (res && res.errCode === 0) {
        toast.success("Delete the user succeed!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Delete the user error!");
        dispatch(deleteUserFailded());
      }
    } catch (error) {
      toast.error("Delete the user error!");
      dispatch(deleteUserFailded());
      console.log("deleteUserFailded error: ", error);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailded = () => ({
  type: actionTypes.DELETE_USER_FAILDED,
});

export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = (await editUserService(data)).data;
      if (res && res.errCode === 0) {
        toast.success("Update the user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Update the user error!");
        dispatch(editUserFailded());
      }
    } catch (error) {
      toast.error("Update the user error!");
      dispatch(editUserFailded());
      console.log("EditUserFailded error: ", error);
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailded = () => ({
  type: actionTypes.EDIT_USER_FAILDED,
});

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = (await getTopDoctorHomeService(20)).data;
      console.log("Chien: ", res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
        });
      }
    } catch (error) {
      console.log("FETCH_TOP_DOCTORS_FAILDED: ", error);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
      });
    }
  };
};
