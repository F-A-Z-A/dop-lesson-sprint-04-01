import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunkMiddleware, { type ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type DecksActions, decksReducer } from '../features/decks/decks-reducer.ts';

const rootReducer = combineReducers({
  decksReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export type AppRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>;

// export type AppThunk = ThunkAction<void, AppRootState, unknown, AppActionsType>;

export type AppActionsType = DecksActions;
