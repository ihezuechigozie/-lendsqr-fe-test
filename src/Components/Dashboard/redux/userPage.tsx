import {createSlice} from "@reduxjs/toolkit"
export const resetSearch = () => ({
    type: "RESET_SEARCH",
});
  
export const userPage = createSlice({
    name: "page",
    initialState: {
        createPage: "empty",
        searchQuerry: null,

    },
    reducers: {
        userSearch: (state, action)=>{
            state.createPage = "userSearch";
            state.searchQuerry = action.payload

        }
    }
    
})
export const {
    userSearch
} = userPage.actions
export default userPage.reducer