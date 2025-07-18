import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { NetworkError, DataError } from './utils/errorHandler';

async function handleApi() {
    try {
        const products = await fetchProducts();

        products.forEach(product => {
            console.log(product.displayDetails());

            const discount = calculateDiscount(product);
            const tax = calculateTax(product);

            console.log(`Discount is: $${discount} Tax is: $${tax} Price after discount is: $${product.getPriceWithDiscount()}`);
        });

    } catch (error) {
        if (error instanceof NetworkError) {
            console.error("Network issue:", error.message);
        } else if (error instanceof DataError) {
            console.error("Data issue:", error.message);
        } else if (error instanceof Error) {
            console.error("Unknown error:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

handleApi();