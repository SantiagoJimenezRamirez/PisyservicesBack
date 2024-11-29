"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/category.model.ts
const sequelize_1 = require("sequelize");
const connection_db_1 = require("../db/connection.db");
// Define la clase Category extendiendo Sequelize's Model
class Category extends sequelize_1.Model {
}
// Inicializa el modelo Category con Sequelize
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que el nombre sea único
    },
}, {
    sequelize: connection_db_1.sequelize, // Tu instancia de Sequelize
    modelName: 'Category', // Nombre del modelo
    tableName: 'categories', // Nombre de la tabla en la base de datos
    timestamps: true, // Maneja automáticamente `createdAt` y `updatedAt`
});
exports.default = Category;
