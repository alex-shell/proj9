import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import GlobalStyle from "./theme/GlobalStyle.js";

function App() {
  const [login, setLogin] = useState(false);

  let content = login ? (
    <>
      <Shop />
      <button className="btn" onClick={() => setLogin(false)}>
        Выйти
      </button>
    </>
  ) : (
    <>
      <h2>Нужно залогиниться!</h2>
      <button className="btn" onClick={() => setLogin(true)}>
        Войти
      </button>
    </>
  );

  return (
    <>
      <GlobalStyle />
      {content}
    </>
  );
}

render(<App />, document.querySelector("#root"));
