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
exports.closeHelpRequest = exports.volunteerForRequest = exports.createHelpRequest = exports.getHelpRequestById = exports.getHelpRequests = void 0;
const HelpRequest_1 = __importDefault(require("../Models/HelpRequest"));
const getHelpRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location, status, priority } = req.query;
    const filter = {};
    if (location)
        filter.location = location;
    if (status)
        filter.status = status;
    if (priority)
        filter.priority = priority;
    try {
        const helpRequests = yield HelpRequest_1.default.find(filter);
        res.status(200).json(helpRequests);
    }
    catch (error) {
        res.status(404).json({ message: 'Help requests not found' });
    }
});
exports.getHelpRequests = getHelpRequests;
const getHelpRequestById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const helpRequest = yield HelpRequest_1.default.findById(id);
        if (!helpRequest)
            return res.status(404).json({ message: 'Help request not found' });
        res.status(200).json(helpRequest);
    }
    catch (error) {
        res.status(404).json({ message: 'Help request not found' });
    }
});
exports.getHelpRequestById = getHelpRequestById;
const createHelpRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, location, priority } = req.body;
    try {
        const newHelpRequest = new HelpRequest_1.default({ title, description, location, priority });
        yield newHelpRequest.save();
        res.status(201).json(newHelpRequest);
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid request parameters' });
    }
});
exports.createHelpRequest = createHelpRequest;
const volunteerForRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { volunteerId } = req.body;
    try {
        const helpRequest = yield HelpRequest_1.default.findByIdAndUpdate(id, { status: 'in progress', volunteerId }, { new: true });
        if (!helpRequest)
            return res.status(404).json({ message: 'Help request not found' });
        res.status(200).json(helpRequest);
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid request parameters' });
    }
});
exports.volunteerForRequest = volunteerForRequest;
const closeHelpRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const helpRequest = yield HelpRequest_1.default.findByIdAndUpdate(id, { status: 'closed' }, { new: true });
        if (!helpRequest)
            return res.status(404).json({ message: 'Help request not found' });
        res.status(200).json(helpRequest);
        // Send notification email
    }
    catch (error) {
        res.status(400).json({ message: 'Request is already closed or invalid request parameters' });
    }
});
exports.closeHelpRequest = closeHelpRequest;
