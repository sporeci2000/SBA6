import { Product } from "../models/Product";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`Network response was not ok.`);
        }

        const data = await response.json();

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