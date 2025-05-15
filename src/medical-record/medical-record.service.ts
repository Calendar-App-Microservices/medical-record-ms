import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PaginationDto } from '../common';

@Injectable()
export class MedicalRecordService {
  create(createMedicalRecordDto: CreateMedicalRecordDto) {
    return 'This action adds a new medicalRecord';
  }

  findAll(paginationDto: PaginationDto) {
    return `This action returns all medicalRecord`;
  }

  /*  async findOne(id: string) {
    const medicalRecord = await this.findOne.findFirst({
      where: { id, available: true}
    });
    
    if ( !medicalRecord) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST
      });
    }

    return medicalRecord
  }*/

  update(id: string, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return `This action updates a #${id} medicalRecord`;
  }

  remove(id: string) {
    return `This action removes a #${id} medicalRecord`;
  }
}
