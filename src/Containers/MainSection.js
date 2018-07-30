import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Page, Layout, Button } from "@shopify/polaris";
import NoProductsMainPage from "../components/NoProductsMainPage";
import MainPage from "../components/MainPage";

class MainSection extends Component {
  constructor() {
    super();
    this.productsCount = 1;
  }
  render() {
    switch (this.productsCount) {
      case 0:
        return <NoProductsMainPage />;
      default:
        return <MainPage />;
    }
  }
}
//callout card, when no products are present.
//card sectioned with title attr , when add new product and view products need to be displayed

//empty state, to show no products exist.

//card with header actions, to add new product, or save product
//card with footer actions, to save or cancel the changes made to the product, in edit product.

//card with multiplle sections, to display settings related to same functionality in settings page.
//Layout.AnnotatedSection, for use in add new product, or edit new product, to group data related to sinle entity together.
//Page : with Pagination, and primary and secondary content, to be used in edit product, so that consumer can quickly access next/previous product.

//use thumbnail to view main product image thumbnail in view products, and edit produicts.
//use Skeleton Page, when the View Product is loading data, or the edit Product is loading data.

// Button loadingState when, saving the data of new product, or edited product.
export default MainSection;

/*title = "Add New Products"
description = "You will be able to enter new prducts along with Price Break using this." >
*/
