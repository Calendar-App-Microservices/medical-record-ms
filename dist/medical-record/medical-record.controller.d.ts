import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PaginationDto } from '../common';
export declare class MedicalRecordController {
    private readonly medicalRecordService;
    constructor(medicalRecordService: MedicalRecordService);
    create(createMedicalRecordDto: CreateMedicalRecordDto): string;
    findAll(paginationDto: PaginationDto): string;
    update(updateMedicalRecordDto: UpdateMedicalRecordDto): string;
    remove(id: number): string;
}
