import { type AddDeckParams, decksAPI } from './decks-a-p-i.ts';
import { addDeckAC, setDecksAC } from './decks-reducer.ts';
import type { Dispatch } from 'redux';

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  const res = await decksAPI.fetchDecks();
  dispatch(setDecksAC(res.data.items));
};

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  const res = await decksAPI.addDeck(params);
  dispatch(addDeckAC(res.data));
};
