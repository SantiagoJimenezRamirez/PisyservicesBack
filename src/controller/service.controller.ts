// controllers/ServiceRequestController.ts
import { Request, Response } from 'express';
import { ServiceRequestService } from '../services/services.service';

export class ServiceRequestController {

  constructor() {
  }

  async create(req: Request, res: Response) {
    try {
      const name = req.body.form.name
      const email = req.body.form.email
      const message = req.body.form.message

      console.log(req.body)
      const serviceRequest = new ServiceRequestService();
      const newRequest = await serviceRequest.createServiceRequest({ name, email, message });
      res.status(201).json(newRequest);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const serviceRequest = new ServiceRequestService();
      const requests = await serviceRequest.getAllServiceRequests();
      res.status(200).json(requests);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
  

  async delete(req: Request, res: Response) {
    try {
      const serviceRequest = new ServiceRequestService();
      const id = parseInt(req.params.id, 10);
      await serviceRequest.deleteServiceRequest(id);
      res.status(200).json({ message: 'Service request deleted successfully' });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
}
