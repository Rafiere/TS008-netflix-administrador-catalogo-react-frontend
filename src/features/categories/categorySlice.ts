/**
 * Dentro desse arquivo, teremos a lógica das páginas de
 * categoria. Um "slice" é, basicamente, um pedaço de um
 * determinado estado.
 */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const category: Category = {
  id: "0ce68dd-4981-4ee2-a23b-a01452b96b01",
  name: "Olive",
  description: "Earum quo at dolor tempore nisi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-05-15T10:59:09+0000",
};

export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
}

/**
 * Esse objeto representará as categorias da aplicação.
 */
export const initialState = [
  category,
  { ...category, id: "1234", name: "Peach" },
];

/**
 * Esse slice terá pedaços do estado da
 */
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

/**
 * O "RootState" é o estado geral da store. Através dele, podemos
 * selecionar apenas o state de categorias.
 */

/**
 * Ao chamarmos o seletor abaixo, teremos acesso a todas as categorias que estão
 * salvas dentro do store do Redux.
 */
export const selectCategories = (state: RootState) => state.categories;

/**
 * O seletor abaixo retornará uma determinada categoria pelo ID dela. Ou seja, esse seletor
 * receberá um ID e procurará, dentro do store, a categoria que possui esse determinado ID.
 */
export const selectCategoryById = (state: RootState, id: string) => {
  return (
    state.categories.find((category) => category.id === id) || {
      id: "",
      name: "",
      description: "",
      is_active: false,
      deleted_at: null,
      created_at: "",
      updated_at: "",
    }
  ); //Se nenhuma categoria com o ID especificado for encontrada, será retornada uma categoria vazia.
};

export default categoriesSlice.reducer;
