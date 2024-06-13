import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../utility/common/property-category';

@Entity('property')
export class PropertyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  serialNumber: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: Category,
    default: Category.ELECTRONIC,
  })
  category: Category[];

  @Column({ type: 'varchar' })
  image: string;
}
