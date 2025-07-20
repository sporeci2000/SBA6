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
const errorHandler_1 = require("../utils/errorHandler");
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new errorHandler_1.NetworkError(`Network response was not ok.`);
            }
            const apiResponse = yield response.json();
            if (!apiResponse.products) {
                throw new errorHandler_1.DataError("Products data is not ok.");
            }
            return apiResponse.products.map((product) => new Product_1.Product(product.id, product.title, product.description, product.category, product.price, product.discountPercentage));
        }
        catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    });
}
