"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
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
        const priceWithDiscount = this.price - (this.price * this.discountPercentage / 100);
        return parseFloat(priceWithDiscount.toFixed(2));
    }
}
exports.Product = Product;
