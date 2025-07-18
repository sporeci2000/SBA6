"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
const Product_1 = require("../models/Product");
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error(`Network response was not ok.`);
            }
            const data = yield response.json();
            return data.products.map((p) => new Product_1.Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage));
        }
        catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    });
}
