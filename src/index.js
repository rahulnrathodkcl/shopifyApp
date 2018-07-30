import * as React from "react";
import "isomorphic-fetch";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import store from "../src/store/index";
import App from "./App";
import "@shopify/polaris/styles.css";
import "./styles.css";
// import { ReactDOM } from "react-dom";

function renderApp() {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}

renderApp();

if (module.hot) {
  module.hot.accept();
}

/*
function renderApp() {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}
*/

// const store = createStore(reducer);
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
/*
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
/*

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
