import React, { Component } from "react";
import { Page, AppProvider } from "@shopify/polaris";
import Header from "./Containers/Header";
import MainSection from "./Containers/MainSection";

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
        <MainSection />
      </AppProvider>
    );
  }
}
// <Header />

export default App;
