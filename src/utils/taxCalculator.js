"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    if (product.category === 'groceries') {
        const taxRate = 0.03;
        return parseFloat((product.price * taxRate).toFixed(2));
    }
    else {
        const taxRate = 0.0475;
        return parseFloat((product.price * taxRate).toFixed(2));
    }
}
