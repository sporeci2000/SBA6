"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    // Converted tax rates into decimal format (3% => 0.03; 4.75=> 0.475)  to simplify the calculation directly in code
    if (category === 'groceries') {
        const taxRate = 0.03;
        const dollarTax = parseFloat((price * taxRate).toFixed(2));
        return dollarTax;
    }
    else {
        const taxRate = 0.0475;
        const dollarTax = parseFloat((price * taxRate).toFixed(2));
        return dollarTax;
    }
}
