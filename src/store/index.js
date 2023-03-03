import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './reducers/postsReducer';
import UsersReducer from './reducers/usersReducer';

export const store = configureStore({
    reducer:{
        posts: PostReducer,
        users: UsersReducer
    }
});