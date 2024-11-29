"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/product.model.ts
const sequelize_1 = require("sequelize");
const connection_db_1 = require("../db/connection.db");
// Define the Product class extending Sequelize's Model
class Product extends sequelize_1.Model {
}
// Initialize the Product model with Sequelize
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imagePath: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Optional field
    },
}, {
    sequelize: connection_db_1.sequelize, // Your Sequelize instance
    modelName: 'Product', // Model name
    tableName: 'products', // Table name in the database
    timestamps: true, // Automatically manages `createdAt` and `updatedAt`
});
exports.default = Product;
