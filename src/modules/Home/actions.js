import { GET_ITEM, APPLY_PICKUP_DISCOUNT, APPLY_PROMO_CODE } from "./constants";

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
export function applyPromoCode() {
  return {
    type: APPLY_PROMO_CODE
  };
}
