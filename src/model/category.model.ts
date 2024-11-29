// src/models/category.model.ts
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/connection.db';

// Define los atributos para el modelo Category
interface CategoryAttributes {
  id: number;
  name: string;
}

// Define los atributos de creación (excluyendo `id`, que será generado automáticamente)
interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

// Define la clase Category extendiendo Sequelize's Model
class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializa el modelo Category con Sequelize
Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el nombre sea único
    },
  },
  {
    sequelize: sequelize, // Tu instancia de Sequelize
    modelName: 'Category', // Nombre del modelo
    tableName: 'categories', // Nombre de la tabla en la base de datos
    timestamps: true, // Maneja automáticamente `createdAt` y `updatedAt`
  }
);

export default Category;
