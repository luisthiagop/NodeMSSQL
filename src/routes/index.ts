import { Router } from 'express';

import clienteRouter from './cliente.router';
import enderecoRouter from './endereco.router';
import telefoneRouter from './telefone.router';

const routes = Router();

routes.use('/cliente', clienteRouter);
routes.use('/endereco', enderecoRouter);
routes.use('/telefone', telefoneRouter);

export default routes;
