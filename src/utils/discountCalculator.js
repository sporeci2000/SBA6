"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    const dollarDiscount = parseFloat((price * discountPercentage / 100).toFixed(2));
    return dollarDiscount;
}
