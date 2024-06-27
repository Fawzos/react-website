import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const apiURL = "https://jsonplaceholder.typicode.com/posts";
export const fetchBlogs = createAsyncThunk("blogs", async () => {
  const response = await axios.get(apiURL);
  console.log(response.data);
  return response.data;
});
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
// export { fetchBlogs };
export default blogSlice.reducer;
