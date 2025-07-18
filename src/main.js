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
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
function handleApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield (0, apiService_1.fetchProducts)();
            products.forEach(product => {
                console.log(product.displayDetails());
                const discount = (0, discountCalculator_1.calculateDiscount)(product);
                const tax = (0, taxCalculator_1.calculateTax)(product);
                console.log(`Discount is: $${discount} Tax is: $${tax} Price after discount is: $${product.getPriceWithDiscount()}`);
            });
        }
        catch (error) {
            if (error instanceof errorHandler_1.NetworkError) {
                console.error("Network issue:", error.message);
            }
            else if (error instanceof errorHandler_1.DataError) {
                console.error("Data issue:", error.message);
            }
            else if (error instanceof Error) {
                console.error("Unknown error:", error.message);
            }
            else {
                console.error("Unexpected error:", error);
            }
        }
    });
}
handleApi();
