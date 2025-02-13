"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = __importDefault(require("./model/producto"));
var resultado_1 = require("./model/resultado");
var BD = /** @class */ (function () {
    function BD() {
    }
    BD.AgregarProducto = function (producto) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        return [4 /*yield*/, producto_1.default.findOne({ nombre: producto.nombre }, function (err, productoRepetido) {
                                if (err == null && productoRepetido == null) {
                                    var esquemita = new producto_1.default(producto);
                                    esquemita.save();
                                }
                                else {
                                    result = false;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BD.ModificarProducto = function (producto, nombreViejo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, producto_1.default.findOne({ nombre: producto.nombre }).then(function (productoRepetido) { return __awaiter(_this, void 0, void 0, function () {
                            var result;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(productoRepetido == null || producto.nombre === nombreViejo)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, producto_1.default.findOne({ nombre: nombreViejo }).then(function (productoViejo) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    if (productoViejo != null) {
                                                        productoViejo.nombre = producto.nombre;
                                                        productoViejo.descripcion = producto.descripcion;
                                                        productoViejo.imagen = producto.imagen;
                                                        productoViejo.precio = producto.precio;
                                                        productoViejo.stock = producto.stock;
                                                        productoViejo.save();
                                                        result = resultado_1.Resultado.Exito;
                                                    }
                                                    else {
                                                        result = resultado_1.Resultado.Error;
                                                    }
                                                    return [2 /*return*/, result];
                                                });
                                            }); })];
                                    case 1:
                                        result = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        result = resultado_1.Resultado.NombreRepetido;
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BD.EliminarProducto = function (nombre) {
        producto_1.default.deleteOne({ nombre: nombre }, function (err) {
            console.log(err);
        });
    };
    BD.ObtenerProducto = function (nombre) {
        return __awaiter(this, void 0, void 0, function () {
            var producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, producto_1.default.findOne({ nombre: nombre })];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    BD.ObtenerTodos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productos = [];
                        return [4 /*yield*/, producto_1.default.find()];
                    case 1:
                        productos = _a.sent();
                        return [2 /*return*/, productos];
                }
            });
        });
    };
    return BD;
}());
exports.default = BD;
