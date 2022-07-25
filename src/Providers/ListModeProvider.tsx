import React, {createContext} from 'react';
import {ListMode} from '../types';

interface Props {
  children: React.ReactNode;
}

interface ListModeContext {
  listMode: ListMode;
  setListMode: (listMode: ListMode) => void;
}

export const listModeContext = createContext<ListModeContext>({
  listMode: 'list',
  setListMode: () => {},
});

export const ListModeProvider = ({children}: Props) => {
  const [listMode, setListMode] = React.useState<ListMode>('list');
  const {Provider} = listModeContext;
  return <Provider value={{listMode, setListMode}}>{children}</Provider>;
};
