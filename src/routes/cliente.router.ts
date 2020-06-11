import { Router } from 'express';

import ClienteController from '../controllers/ClienteController';

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.post('/', clienteController.create);
clienteRouter.patch('/:id', clienteController.edit);
clienteRouter.delete('/:id', clienteController.delete);
clienteRouter.get('/', clienteController.index);

export default clienteRouter;
