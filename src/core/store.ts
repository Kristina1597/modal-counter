import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';

export const store = configureStore({reducer: {
    appReducer: appReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
