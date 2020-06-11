/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import Endereco from './Endereco';
import Telefone from './Telefone';

@Entity()
class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(type => Endereco, endereco => endereco.cliente)
  enderecos: Endereco[];

  @OneToMany(type => Telefone, telefone => telefone.cliente)
  telefones: Telefone[];
}

export default Cliente;
