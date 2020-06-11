/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response, NextFunction } from 'express';
import Endereco from '../entity/Endereco';

export default class EnderecoController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    const resp = [];
    const {
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      cliente_id,
    } = request.body;
    try {
      const novoEndereco = new Endereco();
      novoEndereco.logradouro = logradouro;
      novoEndereco.numero = numero;
      novoEndereco.bairro = bairro;
      novoEndereco.cidade = cidade;
      novoEndereco.estado = estado;
      novoEndereco.cliente_id = cliente_id;

      resp.push(await novoEndereco.save());
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
    const resp = [];
    try {
      // obter parametros da requisicao
      const { id } = request.params;
      const { logradouro, numero, bairro, cidade, estado } = request.body;
      // recuperar o endereco a ser editado
      const endereco = await Endereco.findOne(id);
      // setar o novo valor para o endereço
      endereco.logradouro = logradouro;
      endereco.numero = numero;
      endereco.bairro = bairro;
      endereco.cidade = cidade;
      endereco.estado = estado;
      endereco.estado = estado;
      // salvar no banco
      resp.push(await endereco.save());
    } catch (err) {
      next(err);
    }
    return response.json(resp);
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    const resp = [];
    try {
      // obter parametros da requisicao
      const { id } = request.params;
      // recuperar o endereco a ser editado
      resp.push(await Endereco.delete(id));
    } catch (err) {
      next(err);
    }
    return response.json(resp);
  }
}
