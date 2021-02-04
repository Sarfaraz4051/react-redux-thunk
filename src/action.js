import Axios from "axios";

const userLoading = () => ({
  type: "FETCH_USERS_REQUEST",
});

const userSuccess = (payload) => ({
  type: "FETCH_REQUEST_SUCCESS",
  payload,
});

const userError = (error) => ({
  type: "FETCH_REQUEST_ERROR",
  error,
});

export const fetch_users = () => async (dispatch, getState) => {
  dispatch(userLoading());
  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSuccess(response.data));
  } catch (error) {
    dispatch(userError(error));
  }
};
