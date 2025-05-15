import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PaginationDto } from '../common';
export declare class MedicalRecordService {
    create(createMedicalRecordDto: CreateMedicalRecordDto): string;
    findAll(paginationDto: PaginationDto): string;
    update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto): string;
    remove(id: number): string;
}
