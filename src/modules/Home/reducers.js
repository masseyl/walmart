import {
  GET_ITEM,
  APPLY_PROMO_CODE,
  APPLY_PICKUP_DISCOUNT,
  CHANGE_ZIP_CODE
} from "./constants";

let INITIAL_STATE = {
  item: {
    itemName: "Chair",
    itemDescription: "Really really Damn Fine Chair - should be red though...",
    itemImageUrl:
      "https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    itemPrice: 115.0,
    itemPickupDiscount: 4.35,
    itemPromoCode: "DISCOUNT",
    itemPromoDiscount: 0.1
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
  },
  currentTaxRate: 0.05,
  currentZipCode: 94070,
  pickupDiscount: 0,
  promoDiscount: 0
};

const moduleReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  let newState = { ...state };
  console.log(newState);
  console.log(newState.pickupDiscount);
  switch (action.type) {
    case GET_ITEM:
      return newState;

    case APPLY_PROMO_CODE:
      if (action.value === state.item.itemPromoCode) {
        newState.promoDiscount = state.item.itemPromoDiscount;
      } else {
        newState.promoDiscount = 0;
      }
      return newState;

    case APPLY_PICKUP_DISCOUNT:
      newState.pickupDiscount =
        newState.pickupDiscount !== 0 ? 0 : state.item.itemPickupDiscount;
      console.log(newState.pickupDiscount);
      return newState;

    case CHANGE_ZIP_CODE:
      newState.currentZipCode = action.zipcode;
      newState.currentTaxRate = state.taxes[action.zipcode] || 0.05;
      return newState;

    default:
      return state;
  }
};

export default moduleReducer;
