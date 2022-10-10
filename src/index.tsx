import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

/**
 * Estamos obtendo o elemento "root" do HTML. Esse
 * elemento é <div> principal do projeto, que está no
 * arquivo "index.html". Com base nessa tag, a aplicação
 * será renderizada.
 */
const container = document.getElementById("root")!;

/**
 * Estamos criando um root container. Dentro desse
 * root, todos os arquivos do React começarão a ser
 * renderizados.
 */
const root = createRoot(container);

/**
 * Um "provider" é um padrão de arquitetura muito utilizado
 * no React. Ele é utilizando quando queremos passar informações
 * para todos os elementos filhos.
 *
 * Os providers garantem que todos os filhos que estejam dentro
 * deles terão acesso aos dados que estão nesse escopo.
 *
 * No Redux, a "store" é o local onde passaremos todos os dados
 * de nossa aplicação.
 *
 * O componente "<App>" está dentro do provider, logo, ele terá
 * acesso às informações que estão dentro da store desse provider.
 */

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * O "reportWebVitals" é utilizado para analisarmos a saúde da nossa
 * aplicação, assim, se estivermos com problemas de performance, podemos
 * utilizar esses reports para tentarmos analisar o problema.
 */
reportWebVitals();
