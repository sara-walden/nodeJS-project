"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helprequestsController_1 = require("../Controllers/helprequestsController");
const router = express_1.default.Router();
router.get('/api/requests', helprequestsController_1.getHelpRequests);
router.get('/api/requests/:id', helprequestsController_1.getHelpRequestById);
router.post('/api/requests', helprequestsController_1.createHelpRequest);
router.post('/api/requests/:id/volunteer', helprequestsController_1.volunteerForRequest);
router.post('/api/requests/:id/close', helprequestsController_1.closeHelpRequest);
exports.default = router;
