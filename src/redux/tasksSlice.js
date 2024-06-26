import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  //   reducers: {
  //     fetchingInProgress(state) {
  //       state.isLoading = true;
  //     },
  //     fetchingSuccess(state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     fetchingError(state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
