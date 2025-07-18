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
        const priceWithDiscount = this.price - (this.price * this.discountPercentage / 100);
        return parseFloat(priceWithDiscount.toFixed(2));
    }
}

