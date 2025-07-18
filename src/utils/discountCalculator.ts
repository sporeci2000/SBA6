export function calculateDiscount(price: number, discountPercentage: number): number {
    const dollarDiscount = parseFloat((price * discountPercentage / 100).toFixed(2));
    return dollarDiscount;
}
