import React from "react";
import "./App.css";
import WindowWithButton from "./WindowWithButton";
import WindowWithText from "./WindowWithText";

import { store } from "./store";

import { Provider } from "react-redux";

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const win = Number(queryParams.get("winNumber"));
  let page;
  if (win === 1) {
    page = <WindowWithButton />;
  } else {
    page = <WindowWithText />;
  }
  console.log(win);
  return (
    <Provider store={store}>
      <div className="App">{page}</div>
    </Provider>
  );
}

export default App;
