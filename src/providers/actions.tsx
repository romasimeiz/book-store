import {Book} from "../types";

export enum Actions {
  ADD_TO_CART,
}

export type AppActions = {
  type: Actions;
  payload: Book;
}
