import React, { Component } from "react";
import { EmptyState, Layout, Page, Card, CalloutCard } from "@shopify/polaris";
import { render } from "react-dom";

class NoProductsMainPage extends Component {
  render() {
    return (
      <Page title="QPBreaker">
        <EmptyState
          heading="No Products Here"
          action={{ content: "Add New Products" }}
          secondaryAction={{
            content: "Learn more",
            url: "https://help.shopify.com"
            //todo: Change the URL of secondary Action...
          }}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>Start adding new products to your store right from here.</p>
        </EmptyState>
      </Page>
    );
  }
}
export default NoProductsMainPage;
