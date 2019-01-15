import {
  GET_ITEM,
  APPLY_PICKUP_DISCOUNT,
  APPLY_PROMO_CODE,
  CHANGE_ZIP_CODE
} from "./constants";

export function getItem() {
  return {
    type: GET_ITEM
  };
}
export function applyPickupDiscount() {
  return {
    type: APPLY_PICKUP_DISCOUNT
  };
}
export function applyPromoCode(value) {
  return {
    type: APPLY_PROMO_CODE,
    value
  };
}
export function changeZipCode(zip) {
  return {
    type: CHANGE_ZIP_CODE,
    zip
  };
}
