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
class Endereco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cliente_id: number;

  @ManyToOne(type => Cliente, cliente => cliente.enderecos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}

export default Endereco;
