/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
import { Request, Response, NextFunction } from 'express';

import Cliente from '../entity/Cliente';
import Endereco from '../entity/Endereco';
import Telefone from '../entity/Telefone';

export default class ClienteController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    const resp = [];
    try {
      for (const cli in request.body) {
        // obter os parametros da requisicao
        const { nome, endereco, telefone } = request.body[cli];
        // criar um novo cliente e setar as propriedades
        const novoCliente = new Cliente();
        novoCliente.nome = nome;
        // salvar no banco
        await novoCliente.save();

        // criar uma lista de endereco conforme passado
        const novosEnderecos = [];
        for (const i in endereco) {
          // criar um novo endereco
          const end = new Endereco();
          // setar as propsiedades de cada endereco
          end.logradouro = endereco[i].logradouro;
          end.numero = endereco[i].numero;
          end.bairro = endereco[i].bairro;
          end.cidade = endereco[i].cidade;
          end.estado = endereco[i].estado;
          // relaciona o endereço ao cliente criado
          end.cliente_id = novoCliente.id;
          // salvar no banco
          await end.save();
          novosEnderecos.push(end);
        }

        // criar uma lista de telefones conforme passado
        const novosTelefones = [];
        for (const i in telefone) {
          // criar um novo telefone
          const tel = new Telefone();
          // setar as propriedades do telefone
          tel.numero = telefone[i].numero;
          // relacionar o telefone ao cliente criado
          tel.cliente_id = novoCliente.id;
          // salvar no banco
          await tel.save();
          novosTelefones.push(tel);
        }

        // inserir telefones e endereços ao cliente que sera retornado
        novoCliente.enderecos = novosEnderecos;
        novoCliente.telefones = novosTelefones;
        novoCliente.save();

        // resposta
        resp.push(novoCliente);
      }
    } catch (err) {
      next(err);
    }
    return response.json(resp);
  }

  public async edit(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      // obter parametros da requisicao
      const { id } = request.params;
      const { nome } = request.body;
      // recuperar o usuario a ser editado
      const cliente = await Cliente.findOne(id);
      // setar o novo valor para o nome
      cliente.nome = nome;
      // salvar no banco
      cliente.save();
      // retornar o usuario editado
      return response.json(cliente);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      // obter parametros da requisicao
      const { id } = request.params;
      // deletear o usuario
      const cliente = await Cliente.delete(id);
      // retornar a resposta
      return response.json(cliente);
    } catch (err) {
      next(err);
    }
  }

  public async index(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const clientes = await Cliente.find({
        relations: ['enderecos', 'telefones'],
      });
      // retornar a resposta
      return response.json(clientes);
    } catch (err) {
      next(err);
    }
  }
}
