import { Product } from "../models/Product";
import { NetworkError, DataError } from "../utils/errorHandler"

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new NetworkError(`Network response was not ok.`);
        }

        const apiResponse = await response.json();

        if (!apiResponse.products) {
            throw new DataError("Products data is not ok.");
        }

        return apiResponse.products.map((product: any) => new Product(
            product.id,
            product.title,
            product.description,
            product.category,
            product.price,
            product.discountPercentage
        ));
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Something unexpected happened!");
    }
}