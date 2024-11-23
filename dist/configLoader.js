"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY = exports.HOST = exports.PORT = exports.DB_DIALECT = exports.DB_PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = void 0;
exports.readConfigFile = readConfigFile;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Ruta del archivo de configuración
const configFilePath = path_1.default.join(__dirname, '../config.txt');
// Función para leer el archivo de configuración y devolver las variables
function readConfigFile(filePath) {
    const config = {};
    const content = fs_1.default.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (const line of lines) {
        if (line.trim() && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            if (key && value) {
                config[key.trim()] = value.trim();
            }
        }
    }
    return config;
}
// Leer las variables del archivo de configuración
const config = readConfigFile(configFilePath);
// Definir constantes en mayúsculas
exports.DB_NAME = config.DB_NAME;
exports.DB_USER = config.DB_USER;
exports.DB_PASSWORD = config.DB_PASSWORD;
exports.DB_HOST = config.DB_HOST;
exports.DB_PORT = parseInt(config.DB_PORT);
exports.DB_DIALECT = config.DB_DIALECT; // Cambia esto si usas otro dialecto
exports.PORT = parseInt(config.PORT);
exports.HOST = config.HOST;
exports.KEY = config.KEY;
