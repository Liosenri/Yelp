import React, {createContext} from 'react';
import {Business} from '../types';

interface Props {
  children: React.ReactNode;
}

interface FavoritesContext {
  favorites: Business[];
  removeFavorite: (favorite: Business) => void;
  addFavorite: (favorite: Business) => void;
  setFavorites: (favorites: Business[]) => void;
}

export const favoritesContext = createContext<FavoritesContext>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  setFavorites: () => {},
});

export const FavoritesProvider = ({children}: Props) => {
  const [favorites, setFavorites] = React.useState<Business[]>([]);

  const addFavorite = (favorite: Business) =>
    setFavorites([...favorites, favorite]);
  const removeFavorite = (favorite: Business) =>
    setFavorites(favorites.filter(f => f.id !== favorite.id));

  const {Provider} = favoritesContext;
  return (
    <Provider value={{favorites, addFavorite, removeFavorite, setFavorites}}>
      {children}
    </Provider>
  );
};
