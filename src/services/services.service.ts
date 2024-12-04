import { ServiceRequest } from "../model/service.model";

export class ServiceRequestService {
  async createServiceRequest(data: any) {
    console.log("DATOSSSS: ", data)
    try {
      const newRequest = await ServiceRequest.create(data);
      return newRequest;
    } catch (error:any) {
      throw new Error('Error creating service request: ' + error.message);
    }
  }
  

  async getAllServiceRequests() {
    try {
      const requests = await ServiceRequest.findAll({
        order: [['createdAt', 'DESC']],
      });
      return requests;
    } catch (error:any) {
      throw new Error('Error fetching service requests: ' + error.message);
    }
  }

  async deleteServiceRequest(id: number) {
    try {
      const result = await ServiceRequest.destroy({ where: { id } });
      if (!result) throw new Error('Service request not found');
      return true;
    } catch (error:any) {
      throw new Error('Error deleting service request: ' + error.message);
    }
  }
}
