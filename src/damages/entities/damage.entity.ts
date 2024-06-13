import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('damages')
export class DamageEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_damagedItem_id' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  serialNumber: string;

  @Column({ nullable: false })
  college: string;

  @Column({ nullable: false })
  block: string;

  @Column({ nullable: false })
  roomNumber: number;

  @Column({ nullable: false, type: 'varchar' })
  description: string;
}
