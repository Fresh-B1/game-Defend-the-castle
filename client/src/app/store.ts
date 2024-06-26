import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../pages/LogReg/authSlice';
import usersSlice from '../pages/Leadersboard/usersSlice';
import lobbySlice from '../pages/Lobby/lobbySlice';
import profileSlice from '../pages/Profile/profileSlice';
import gameSlice from '../pages/Game/gameSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    auth: authSlice,
    users: usersSlice,
    lobby: lobbySlice,
    game: gameSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

// Типизация и экспорт хуков для работы с store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
