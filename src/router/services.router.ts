// routes/ServiceRequestRoutes.ts
import { Router } from 'express';
import { ServiceRequestController } from '../controller/service.controller';

const routerServices = Router();
const serviceController = new ServiceRequestController();

routerServices.post('/service-requests', serviceController.create);
routerServices.get('/service-requests', serviceController.getAll);
routerServices.delete('/service-requests/:id', serviceController.delete);

export default routerServices;
