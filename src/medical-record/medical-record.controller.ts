import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PaginationDto } from '../common';

@Controller()
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @MessagePattern('create_medical_record')
  create(@Payload() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordService.create(createMedicalRecordDto);
  }
/*  
  @MessagePattern('find_all_medical_records')
  findAll(@Payload() paginationDto:PaginationDto) {
    return this.medicalRecordService.findAll(paginationDto);
  }

  @MessagePattern({cmd: 'find_one_medical_record'})
  findOne(@Payload('id', ParseUUIDPipe) id: string) {
    return this.medicalRecordService.findOne(id);
  }

  @MessagePattern('update_medical_record')
  update(@Payload() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordService.update(updateMedicalRecordDto.id, updateMedicalRecordDto);
  }

  @MessagePattern('remove_medical_record')
  remove(@Payload() id: number) {
    return this.medicalRecordService.remove(id);
  }*/
}
