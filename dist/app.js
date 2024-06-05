"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./Utils/db"));
const helpRequestsRouter_1 = __importDefault(require("./Routs/helpRequestsRouter"));
const volunteersRouter_1 = __importDefault(require("./Routs/volunteersRouter"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use(helpRequestsRouter_1.default);
app.use(volunteersRouter_1.default);
// Database connection
(0, db_1.default)();
exports.default = app;
