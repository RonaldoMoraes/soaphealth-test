"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const envExamplePath = path_1.default.resolve(__dirname, '../.env.example');
const envPath = path_1.default.resolve(__dirname, '../.env');
if (!fs_1.default.existsSync(envPath)) {
    const envExampleContent = fs_1.default.readFileSync(envExamplePath, 'utf-8');
    fs_1.default.writeFileSync(envPath, envExampleContent);
    console.log('.env file created from .env.example.');
}
else {
    console.log('.env file already exists.');
}
//# sourceMappingURL=createEnvFile.js.map