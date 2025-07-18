import { calculateDiscount } from "../utils/discountCalculator";
//import { calculateTax } from "../utils/taxCalculator";

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }


    displayDetails(): string {

        return `This product is: ${this.title} The description of this product is: ${this.description} Category: ${this.category} The price of this product is: $${this.price} The discount percentage of this product is: ${this.discountPercentage}%`
    }

    getPriceWithDiscount(): number {
        const discount = calculateDiscount(this.price, this.discountPercentage);
        return parseFloat((this.price - discount).toFixed(2));
    }
}

//// If calculating the final price including discount and tax was required, I would use this method

// getFinalPrice(): number {
//     const discount = calculateDiscount(this.price, this.discountPercentage);
//     const discountedPrice = this.price - discount;
//     const tax = calculateTax(discountedPrice, this.category);
//     return parseFloat((discountedPrice + tax).toFixed(2));
// }
