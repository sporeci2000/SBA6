"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
//import { calculateTax } from "../utils/taxCalculator";
class Product {
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `This product is: ${this.title} The description of this product is: ${this.description} Category: ${this.category} The price of this product is: $${this.price} The discount percentage of this product is: ${this.discountPercentage}%`;
    }
    getPriceWithDiscount() {
        const discount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        return parseFloat((this.price - discount).toFixed(2));
    }
}
exports.Product = Product;
//// If calculating the final price including discount and tax was required, I would use this method
// getFinalPrice(): number {
//     const discount = calculateDiscount(this.price, this.discountPercentage);
//     const discountedPrice = this.price - discount;
//     const tax = calculateTax(discountedPrice, this.category);
//     return parseFloat((discountedPrice + tax).toFixed(2));
// }
