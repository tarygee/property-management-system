import { PartialType } from '@nestjs/mapped-types';
import { ReportDamageDto } from './report-damage.dto';

export class UpdateDamageDto extends PartialType(ReportDamageDto) {}
