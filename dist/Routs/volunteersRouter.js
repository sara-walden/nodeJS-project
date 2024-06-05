"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const volunteersController_1 = require("../Controllers/volunteersController");
const router = express_1.default.Router();
router.post('/api/volunteers', volunteersController_1.registerVolunteer);
exports.default = router;
