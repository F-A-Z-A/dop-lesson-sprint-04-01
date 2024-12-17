import type { Deck } from './decks-a-p-i.ts';

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
};

export type DecksState = typeof initialState;

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET_DECKS': {
      const { decks } = action.payload;
      return { ...state, decks };
    }
    case 'DECKS/ADD_DECKS': {
      const { deck } = action.payload;
      console.log(deck);
      return { ...state, decks: [deck, ...state.decks] };
    }
    default:
      return state;
  }
};

export const setDecksAC = (decks: Deck[]) => {
  return { type: 'DECKS/SET_DECKS', payload: { decks } } as const;
};

export const addDeckAC = (deck: Deck) => {
  return { type: 'DECKS/ADD_DECKS', payload: { deck } } as const;
};

export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>;
