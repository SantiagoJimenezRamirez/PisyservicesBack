// models/ServiceRequest.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.db';

export class ServiceRequest extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public message!: string;
}

ServiceRequest.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize:sequelize,
    modelName: 'ServiceRequest',
    tableName: 'service_requests',
    timestamps: true,
  }
);
