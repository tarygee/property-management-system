import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('property')
export class PropertyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: false, unique:true })
    serialNumber: string;

    @Column()
    category: string;

    @Column()
    status: string;
}
