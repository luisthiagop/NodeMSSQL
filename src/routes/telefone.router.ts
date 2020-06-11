import { Router } from 'express';

import TelefoneController from '../controllers/TelefoneController';

const telefoneRouter = Router();
const telefoneController = new TelefoneController();

telefoneRouter.post('/', telefoneController.create);
telefoneRouter.patch('/:id', telefoneController.edit);
telefoneRouter.delete('/:id', telefoneController.delete);

export default telefoneRouter;
