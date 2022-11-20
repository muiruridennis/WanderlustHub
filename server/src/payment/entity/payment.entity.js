"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var client_entity_1 = require("../../clients/entity/client.entity");
var destination_entity_1 = require("../../destinations/entity/destination.entity");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Payment.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Payment.prototype, "payAmount");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Payment.prototype, "payDate");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return client_entity_1["default"]; }, function (client) { return client.payment; })
    ], Payment.prototype, "client");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return destination_entity_1["default"]; }, function (destination) { return destination.payment; })
    ], Payment.prototype, "destination");
    Payment = __decorate([
        (0, typeorm_1.Entity)()
    ], Payment);
    return Payment;
}());
exports["default"] = Payment;
