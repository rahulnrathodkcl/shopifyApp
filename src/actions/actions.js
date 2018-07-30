import * as actionTypes from "./actionType";

/* 
  action Creators
*/

export function setProductsCountRequestDetails() {
  return { type: actionTypes.GET_PRODUCTS_COUNT };
}
export function updateVerb(verb) {
  return { type: actionTypes.UPDATE_VERB, verb };
}

export function updatePath(path) {
  return { type: actionTypes.UPDATE_PATH, path };
}

export function updateParams(params) {
  return { type: actionTypes.UPDATE_PARAMS, params };
}

export function requestStartAction() {
  return { type: actionTypes.REQUEST_START };
}

export function requestCompleteAction(json) {
  const responseBody = JSON.stringify(json, null, 2);
  return { type: actionTypes.REQUEST_COMPLETE, responseBody };
}

export function requestErrorAction(requestError) {
  return { type: actionTypes.REQUEST_ERROR, requestError };
}

export function sendRequest(requestFields) {
  const { verb, path, params } = requestFields;
  const fetchOptions = {
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include"
  };

  if (verb !== "GET") {
    fetchOptions["body"] = params;
  }

  return dispatch => {
    dispatch(requestStartAction());
    return fetch(`/shopify/api${path}`, fetchOptions)
      .then(response => response.json())
      .then(json => dispatch(requestCompleteAction(json)))
      .catch(error => dispatch(requestErrorAction(error)));
  };
}

export function setSelectedProductId(productid) {
  return { type: actionTypes.SET_SELECTED_PRODUCT_ID, productid };
}
/* 
  This 2 functions needs to be removed, and need to add relevant field update actions
  updateProductBasicDetails
  updateProductQtyDetails
*/
export function updateProductBasicDetails(productDetails) {
  return { type: actionTypes.UPDATE_PRODUCT_BASIC_DETAILS, productDetails };
}

export function updateProductQtyDetails(qtyDetails) {
  return { type: actionTypes.UPDATE_PRODUCT_QTY_DETAILS, qtyDetails };
}

export function addQtyPriceBreak(key, value) {
  return { type: actionTypes.ADD_QTY_PRICE_BREAK, key, value };
}

export function removeQtyPriceBreak(key, value) {
  return { type: actionTypes.REMOVE_QTY_PRICE_BREAK, key };
}

export function updateQtyPriceBreak(key, value) {
  return { type: actionTypes.UPDATE_QTY_PRICE_BREAK, key, value };
}

export function resetProductQtySettings() {
  /* if necessary pass the ProductId settings .*/
  return { type: actionTypes.RESET_PRODUCT_QTY_SETTINGS };
}

export function resetQtyPriceBreak() {
  /* if necessary pass the productid*/
  return { type: actionTypes.RESET_QTY_PRICE_BREAK };
}
