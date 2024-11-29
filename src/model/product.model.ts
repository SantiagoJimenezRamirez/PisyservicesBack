// src/models/product.model.ts
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/connection.db';

// Define the attributes for the Product model
interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath?: string; // Optional field
}

// Define creation attributes (excluding `id` which will be auto-generated)
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

// Define the Product class extending Sequelize's Model
class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public imagePath?: string; // Optional field

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the Product model with Sequelize
Product.init(
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
  },
  {
    sequelize: sequelize, // Your Sequelize instance
    modelName: 'Product', // Model name
    tableName: 'products', // Table name in the database
    timestamps: true, // Automatically manages `createdAt` and `updatedAt`
  }
);

export default Product;
