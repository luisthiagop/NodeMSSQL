/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response, NextFunction } from 'express';
import Telefone from '../entity/Telefone';

export default class TelefoneController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    const resp = [];
    const { numero, cliente_id } = request.body;
    try {
      const novoTelefone = new Telefone();
      novoTelefone.numero = numero;
      novoTelefone.cliente_id = cliente_id;

      resp.push(await novoTelefone.save());
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
      const { numero } = request.body;
      // recuperar o telefone a ser editado
      const telefone = await Telefone.findOne(id);
      // setar o novo valor para o telefone
      telefone.numero = numero;
      // salvar no banco
      resp.push(await telefone.save());
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
      // recuperar o telefone a ser editado
      resp.push(await Telefone.delete(id));
    } catch (err) {
      next(err);
    }
    return response.json(resp);
  }
}
