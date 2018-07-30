import { combineReducers } from "redux";
import * as actions from "../actions/actions";
import * as actionTypes from "../actions/actionType";

const requestFields = {
  verb: "GET",
  path: "/admin/products/count.json",
  params: JSON.stringify({}, null, 2)
};

const productFields = {
  productId: 0,
  variantId: 0,
  title: "",
  price: 0
};

const productMetaFields = {
  qtyPriceBreak: false,
  qtyOnPurchase: 0,
  enableArrivalDate: false,
  expectedArrivalDate: new Date(),
  leadTime: 0,
  minPurchaseQty: 1,
  enableMaxPurchaseQty: false,
  maxPurchaseQty: 99,
  qtyMultiple: 1
};

const productData = {
  productFields,
  priceBreaks: {},
  productMetaFields
};

const initState = {
  productData,
  requestFields,
  requestInProgress: false,
  requestError: null,
  responseBody: ""
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_VERB:
      return {
        ...state,
        responseBody: "",
        requestFields: {
          ...state.requestFields,
          verb: action.payload.verb
        }
      };
    case actionTypes.UPDATE_PATH:
      return {
        ...state,
        responseBody: "",
        requestFields: {
          ...state.requestFields,
          path: action.payload.path
        }
      };
    case actionTypes.UPDATE_PARAMS:
      return {
        ...state,
        responseBody: "",
        requestFields: {
          ...state.requestFields,
          params: action.payload.params
        }
      };
    case actionTypes.REQUEST_START:
      return {
        ...state,
        responseBody: "",
        requestInProgress: true,
        requestError: null
      };
    case actionTypes.REQUEST_COMPLETE:
      return {
        ...state,
        requestInProgress: false,
        requestError: null,
        responseBody: action.payload.reponse
      };
    case actionTypes.REQUEST_ERROR:
      return {
        ...state,
        requestInProgress: false,
        requestError: action.payload.requestError
      };
    case actionTypes.GET_PRODCUTS_COUNT:
      return {
        ...state,
        requestFields: {
          ...state.requestFields,
          verb: "GET",
          path: "/admin/products/count.json",
          params: {}
        }
      };
    default:
      return state;
  }
}

export default reducer;
