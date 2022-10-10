import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoriesReducer from "../features/categories/categorySlice";

/**
 * Uma store é, basicamente, um grande objeto que
 * contém vários outros objetos dentro. Abaixo, temos
 * o objeto que representa a store atual.
 */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
  },
});

/**
 * Abaixo, temos as tipagens do TypeScript. A store será
 * completamente tipada, dessa forma, o autocomplete poderá
 * funcionar com uma maior efetividade.
 */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
