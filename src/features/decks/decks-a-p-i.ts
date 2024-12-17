import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
});

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDeckResponse>('/v2/decks');
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params);
  },
};

// types
export type AddDeckParams = {
  name: string;
};

type FetchDeckResponse = {
  items: Deck[];
  pagination: Pagination;
};

export type Deck = {
  isFavorite: boolean;
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string | null;
  created: string;
  updated: string;
  cardsCount: number;
};

type Author = {
  id: string;
  name: string;
};

type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};
