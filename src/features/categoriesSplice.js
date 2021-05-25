import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",
    status: 'idle',
  };

export const categoriesSplice = createSlice({
  name: 'categories',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveNewCategory: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
      console.log("new category dispatcher: " + action.payload);
    },
    updateCategory: (state, action) => {
        state.value = action.payload;
        console.log("update category dispatcher: " + action.payload);
    },
  },
});
export const selectCategory = (state) => state.categories.value;

export const { saveNewCategory, updateCategory } = categoriesSplice.actions;

export default categoriesSplice.reducer;