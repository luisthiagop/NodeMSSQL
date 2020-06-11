/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Cliente from './Cliente';

@Entity()
class Telefone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  cliente_id: number;

  @ManyToOne(type => Cliente, cliente => cliente.telefones)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}

export default Telefone;
