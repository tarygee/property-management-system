import { MaintenanceType } from 'src/schedule/utility/common/maintenance-type';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../utility/common/property-category';

@Entity('schedules')
export class ScheduleEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_schedule_id' })
  id: number;

  @Column({
    nullable: false,
    type: 'enum',
    array: false,
    enum: Category,
    default: Category.ELECTRONIC,
  })
  category: Category[];

  @Column({})
  propertyName: string;

  @Column({
    nullable: false,
    type: 'enum',
    array: false,
    enum: MaintenanceType,
    default: MaintenanceType.CORRECTIVE,
  })
  maintenanceType: MaintenanceType[];

  @Column({ type: 'date' })
  date: Date;

  @CreateDateColumn()
  createAt: Timestamp;

  @UpdateDateColumn()
  updateAt: Timestamp;
}
