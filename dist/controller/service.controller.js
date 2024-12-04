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
exports.ServiceRequestController = void 0;
const services_service_1 = require("../services/services.service");
class ServiceRequestController {
    constructor() {
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.form.name;
                const email = req.body.form.email;
                const message = req.body.form.message;
                console.log(req.body);
                const serviceRequest = new services_service_1.ServiceRequestService();
                const newRequest = yield serviceRequest.createServiceRequest({ name, email, message });
                res.status(201).json(newRequest);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serviceRequest = new services_service_1.ServiceRequestService();
                const requests = yield serviceRequest.getAllServiceRequests();
                res.status(200).json(requests);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serviceRequest = new services_service_1.ServiceRequestService();
                const id = parseInt(req.params.id, 10);
                yield serviceRequest.deleteServiceRequest(id);
                res.status(200).json({ message: 'Service request deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.ServiceRequestController = ServiceRequestController;
