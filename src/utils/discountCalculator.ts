import { Product } from "../models/Product";

export function calculateDiscount(product: Product): number {
    return parseFloat((product.price * product.discountPercentage / 100).toFixed(2));
}
