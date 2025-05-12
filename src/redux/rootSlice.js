import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
  name: "root",
  initialState: {
    blogData: [],
    courseData: [],
    loading: false,
    isReloadData: false,
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setReloadData: (state, action) => {
      state.isReloadData = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const {
  showLoading,
  hideLoading,
  setBlogData,
  setReloadData,
  setCourseData,
} = rootSlice.actions;
