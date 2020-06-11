import { Router } from 'express';

import EnderecoController from '../controllers/EnderecoController';

const enderecoRouter = Router();
const enderecoController = new EnderecoController();

enderecoRouter.post('/', enderecoController.create);
enderecoRouter.patch('/:id', enderecoController.edit);
enderecoRouter.delete('/:id', enderecoController.delete);

export default enderecoRouter;
