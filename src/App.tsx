import logo from "./logo.svg";
import "./App.css";
import WindowWithButton from "./WindowWithButton";
import WindowWithText from "./WindowWithText";

import { store } from "./store";

import { Provider } from "react-redux";

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const win = queryParams.get("winNumber");
  console.log(win);
  return (
    <Provider store={store}>
      <div className="App">
        <WindowWithButton />
        <WindowWithText />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
