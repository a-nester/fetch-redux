import axios from "axios";
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from "./tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//     () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/tasks");
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
