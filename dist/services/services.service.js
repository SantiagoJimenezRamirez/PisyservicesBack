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
exports.ServiceRequestService = void 0;
const service_model_1 = require("../model/service.model");
class ServiceRequestService {
    createServiceRequest(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("DATOSSSS: ", data);
            try {
                const newRequest = yield service_model_1.ServiceRequest.create(data);
                return newRequest;
            }
            catch (error) {
                throw new Error('Error creating service request: ' + error.message);
            }
        });
    }
    getAllServiceRequests() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requests = yield service_model_1.ServiceRequest.findAll({
                    order: [['createdAt', 'DESC']],
                });
                return requests;
            }
            catch (error) {
                throw new Error('Error fetching service requests: ' + error.message);
            }
        });
    }
    deleteServiceRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield service_model_1.ServiceRequest.destroy({ where: { id } });
                if (!result)
                    throw new Error('Service request not found');
                return true;
            }
            catch (error) {
                throw new Error('Error deleting service request: ' + error.message);
            }
        });
    }
}
exports.ServiceRequestService = ServiceRequestService;
