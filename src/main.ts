//import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { NetworkError, DataError } from './utils/errorHandler';

async function handleApi() {
    try {
        const productsArray = await fetchProducts();

        productsArray.forEach(product => {
            console.log(product.displayDetails());
            console.log(product.getPriceWithDiscount());

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