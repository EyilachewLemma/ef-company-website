import { createSlice } from "@reduxjs/toolkit";

const spinnerSlice = createSlice({
    name: "loader",
    initialState: { isLoading: false },
    reducers: {
      setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
    },
  });

  export const spinnerAction = spinnerSlice.actions
  export default spinnerSlice.reducer