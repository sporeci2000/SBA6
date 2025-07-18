import { Product } from "../models/Product";
import {NetworkError, DataError} from "../utils/errorHandler"

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new NetworkError(`Network response was not ok.`);
        }

        const data = await response.json();

        if (!data.products) {
            throw new DataError("Products data is not ok.");
        }

        return data.products.map((p: any) => new Product(
            p.id,
            p.title,
            p.description,
            p.category,
            p.price,
            p.discountPercentage
        ));
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}