"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/ServiceRequestRoutes.ts
const express_1 = require("express");
const service_controller_1 = require("../controller/service.controller");
const routerServices = (0, express_1.Router)();
const serviceController = new service_controller_1.ServiceRequestController();
routerServices.post('/service-requests', serviceController.create);
routerServices.get('/service-requests', serviceController.getAll);
routerServices.delete('/service-requests/:id', serviceController.delete);
exports.default = routerServices;
