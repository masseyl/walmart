import {
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  HIDE_UNDO,
  REMOVE_MESSAGE
} from "./constants";

let INITIAL_STATE = {
  item: {
    itemName: "Chair",
    itemDescription: "Damn Fine Chair",
    itemImageUrl:
      "https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    itemPrice: 115.0,
    itemPickupDiscount: 4.35,
    itemPromoCode: "DISCOUNT"
  },
  labels: {
    subTotal: "Subtotal",
    discount: "Pickup savings",
    estFees: "Estimated taxes and fees\n(Based on ${zip})",
    total: "Est. total",
    showItemDetails: "See item details",
    hideItemDetails: "Hide item details",
    applyPromoCode: "Apply promo code",
    hidePromoCode: "Hide promo code",
    pickUp:
      "Picking up the order in the store helps cut costs, and we pass the savings on to you."
  },
  taxes: {
    94070: 0.11,
    37355: 0.01,
    0: 0.05
  }
};

let newState; //out of habit I only copy state when I need to
let messages;
const moduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEM:
      newState = { ...state };
      newState.messagesLoaded = false;

      return newState;

    case GET_ITEM_SUCCESS:
      newState = { ...state };
      messages = [...newState.messages];

      newState = { ...state };
      newState.pageToken = action.response.pageToken;
      messages = messages.concat(action.response.messages);
      newState.messages = messages;
      newState.messagesLoaded = true;

      return newState;

    case GET_ITEM_FAIL:
      newState = { ...state };
      newState.messagesLoaded = true;
      return newState;

    case HIDE_UNDO:
      newState = { ...state };
      newState.undoable = false;

      return newState;

    case REMOVE_MESSAGE:
      newState = { ...state };
      messages = [...newState.messages];
      messages = [
        ...messages.slice(0, action.index),
        ...messages.slice(action.index + 1)
      ];
      newState.messages = messages;
      newState.undoable = true;

      return newState;

    default:
      return state;
  }
};

export default moduleReducer;
