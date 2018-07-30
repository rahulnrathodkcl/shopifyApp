import React, { Component } from "react";
import { render } from "react-dom";
import { Page, Layout, Button, Card, CalloutCard } from "@shopify/polaris";
import NoProductsMainPage from "./NoProductsMainPage";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {}
}

function renderMainPage() {
  return (
    <Page
      title="QPBreaker"
      description="An app to Add Price Breaks"
      primaryAction={[{ content: "Settings" }]}
    >
      <CalloutCard
        title="Add New Products"
        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
        primaryAction={{
          content: "Add Products"
        }}
      >
        <p>
          Add new products to the store from here, to avail the facilities of
          QPBreaker
        </p>
      </CalloutCard>
      <CalloutCard
        title="View/Edit Products"
        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
        primaryAction={{
          content: "View Products"
        }}
      >
        <p>
          View the list of the currently present products in the store, and edit
          the product details.
        </p>
      </CalloutCard>
    </Page>
  );
}

function renderEmptyPage() {
  return <NoProductsMainPage />;
}

export default MainPage;
