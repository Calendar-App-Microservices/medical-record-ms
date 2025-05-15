"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalRecordController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const medical_record_service_1 = require("./medical-record.service");
const create_medical_record_dto_1 = require("./dto/create-medical-record.dto");
const update_medical_record_dto_1 = require("./dto/update-medical-record.dto");
const common_2 = require("../common");
let MedicalRecordController = class MedicalRecordController {
    constructor(medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
    }
    create(createMedicalRecordDto) {
        return this.medicalRecordService.create(createMedicalRecordDto);
    }
    findAll(paginationDto) {
        return this.medicalRecordService.findAll(paginationDto);
    }
    update(updateMedicalRecordDto) {
        return this.medicalRecordService.update(updateMedicalRecordDto.id, updateMedicalRecordDto);
    }
    remove(id) {
        return this.medicalRecordService.remove(id);
    }
};
exports.MedicalRecordController = MedicalRecordController;
__decorate([
    (0, microservices_1.MessagePattern)('createMedicalRecord'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_record_dto_1.CreateMedicalRecordDto]),
    __metadata("design:returntype", void 0)
], MedicalRecordController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findAllMedicalRecord' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_2.PaginationDto]),
    __metadata("design:returntype", void 0)
], MedicalRecordController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateMedicalRecord'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_medical_record_dto_1.UpdateMedicalRecordDto]),
    __metadata("design:returntype", void 0)
], MedicalRecordController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeMedicalRecord'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MedicalRecordController.prototype, "remove", null);
exports.MedicalRecordController = MedicalRecordController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [medical_record_service_1.MedicalRecordService])
], MedicalRecordController);
//# sourceMappingURL=medical-record.controller.js.map