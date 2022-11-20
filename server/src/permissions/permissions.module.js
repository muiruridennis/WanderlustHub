"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PermissionsModule = void 0;
var common_1 = require("@nestjs/common");
var permissions_controller_1 = require("./permissions.controller");
var permissions_service_1 = require("./permissions.service");
var PermissionsModule = /** @class */ (function () {
    function PermissionsModule() {
    }
    PermissionsModule = __decorate([
        (0, common_1.Module)({
            controllers: [permissions_controller_1.PermissionsController],
            providers: [permissions_service_1.PermissionsService]
        })
    ], PermissionsModule);
    return PermissionsModule;
}());
exports.PermissionsModule = PermissionsModule;
