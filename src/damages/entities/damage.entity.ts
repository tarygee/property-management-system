import { Status } from 'src/damages/utility/common/property-status';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('damages')
export class DamageEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_damagedItem_id' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  serialNumber: string;

  @Column({
    nullable: true,
    type: 'enum',
    enum: Status,
    array: false,
    default: [Status.NOTDONE],
  })
  status: Status[];
  @Column({ nullable: false })
  college: string;

  @Column({ nullable: false })
  block: string;

  @Column({ nullable: true })
  floor: string;

  @Column({ nullable: false })
  roomNumber: number;

  @Column({ nullable: false, type: 'varchar' })
  description: string;

  @CreateDateColumn()
  createAt: Timestamp;

  @UpdateDateColumn()
  updateAt: Timestamp;

  // @OneToMany(() => DamageEntity, (fault) => fault.submittedBy)
  // subnittedBy: DamageEntity[];
}
