"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequest = void 0;
// models/ServiceRequest.ts
const sequelize_1 = require("sequelize");
const connection_db_1 = require("../db/connection.db");
class ServiceRequest extends sequelize_1.Model {
}
exports.ServiceRequest = ServiceRequest;
ServiceRequest.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: connection_db_1.sequelize,
    modelName: 'ServiceRequest',
    tableName: 'service_requests',
    timestamps: true,
});
