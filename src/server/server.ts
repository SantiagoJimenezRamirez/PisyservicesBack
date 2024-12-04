import express, { Application } from 'express';
import cors from "cors";
import routerUser from '../router/user.router';
import User from '../model/user.model';
import dotenv from 'dotenv';
import Session from '../model/session.model';
import routerSession from '../router/session.router';
import routerProduct from '../router/product.router';
import Product from '../model/product.model';
import Category from '../model/category.model';
import routerCategory from '../router/category.router';
import routerServices from '../router/services.router';
import { ServiceRequest } from '../model/service.model';
import path from 'path';

// Cargar variables del archivo .env
dotenv.config();

export class Server {
  private app: Application;
  private port: any;

  constructor(){
      this.app = express();
      this.port = Number(process.env.PORT);
      this.listen();
      this.middlewares();
      this.routes();
      this.syncDatabase();
      
  }

  listen(){
    this.app.listen(this.port, () =>{
        console.log('Aplicacion corriendo en el puerto: ' + this.port)
    })
}

routes(){
  this.app.use('/app/user', routerUser)
  this.app.use('/app/session', routerSession)
  this.app.use('/app/product', routerProduct)
  this.app.use('/app/category', routerCategory)
  this.app.use('/app/services', routerServices)
}

middlewares() {
  // Sirve los archivos estáticos desde la carpeta dist/src/uploads
  this.app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  this.app.use(express.json());
  const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };
  this.app.use(cors(corsOptions));
}


syncDatabase = async () => {
  try {
    await User.sync({ force: false });  
    await Session.sync({ force: false }); 
    await Product.sync({ force: false });
    await Category.sync({ force: false })
    await ServiceRequest.sync({ force: false })
    // await Product.sync({ force: false });  // Usa `force: true` para eliminar tablas existentes y recrearlas
    console.log("Tablas sincronizadas exitosamente");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
};
}
