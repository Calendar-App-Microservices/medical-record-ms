import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalRecordModule } from './medical-record/medical-record.module';

@Module({
  imports: [MedicalRecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
