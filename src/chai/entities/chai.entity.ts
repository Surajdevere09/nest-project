import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //sql table === 'chai'
export class chai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
