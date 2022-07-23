import { configureStore } from "@reduxjs/toolkit";
import { composeWithStateSync } from "electron-redux/main";

import counterReducer from "../src/counterSlice";

export const store = configureStore({
  reducer: counterReducer,
  enhancers: (defaultEnhancers) => [composeWithStateSync(defaultEnhancers[0])],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type MainDispatch = typeof store.dispatch;
