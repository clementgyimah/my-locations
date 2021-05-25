import { createSlice } from '@reduxjs/toolkit';
const Datastore = require('nedb');
const categories = new Datastore({ filename: "/attendee.db", autoload: true });
const initialState = {
    value: "",
    categoryList: [],
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

      //state.value = action.payload;
      
      //store new category into database
      categories.insert({name: action.payload});
      console.log("new category dispatcher: " + action.payload);
    },
    updateCategory: (state, action) => {
        //update category name in local database
        /*
        state.value = action.payload.categoryName;
        await categories.update({_id: action.payload.categoryId}, { $set: {name: action.payload.categoryName}}, async (err) => {
            if (err) return console.log(err);
            return;
        })
        */
        console.log("update category dispatcher: " + action.payload.categoryName);
    },
    getAllCategories: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return{
            ...state,
            categoryList: ["Ghana", "USA", "Spain"]
        }

        //a query to the local database to get all categories
        /*
        await categories.find({}, async (err, doc) => {
            if (err) return console.log(err);
            await console.log("all saved categories: " + doc);
            return{
                ...state,
                categoryList: doc
            }
        }); */
      }
  },
});

export const selectCategory = (state) => state.categories.value;
export const catList = (state) => state.categories.categoryList;
export const { saveNewCategory, updateCategory, getAllCategories } = categoriesSplice.actions;

export default categoriesSplice.reducer;