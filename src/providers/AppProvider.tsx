import {createContext, FC, PropsWithChildren, useReducer} from "react";
import {mockData} from "./mockedData";
import {Book} from "../types";
import {Actions, AppActions} from "./actions.tsx";

type AppState = {
  cart: Book[],
  books: Book[],
}

function reducer(state: AppState, action: AppActions) {
  if (action.type === Actions.ADD_TO_CART) {
    return {...state, cart: state.cart.push(action.payload)};
  }
}

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appState, dispatcher] = useReducer(reducer, {
    cart: [],
    books: mockData,
  })

  const AppContext = createContext({ appState, dispatcher });
  return (
    <AppContext.Provider value={{ appState, dispatcher }}>
      {children}
    </AppContext.Provider>
  )
}
