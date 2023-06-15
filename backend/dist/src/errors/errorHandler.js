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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = __importDefault(require("./customError"));
const appLog = (error) => __awaiter(void 0, void 0, void 0, function* () {
    // Log the error to the console, sentry or whatever we want
    console.log(error);
});
const errorHandler = (error, req, res) => {
    if (error instanceof customError_1.default) {
        return res.status(400).json({ error: error.message });
    }
    // Log the error to the console
    if (process.env.NODE_ENV !== 'test') {
        appLog(error);
    }
    return res.status(500).json({ error: 'Internal server error.' });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map