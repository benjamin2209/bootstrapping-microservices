import { Router } from 'express'

import IndexController from './Controller/IndexController.js';

const router = new Router();

router.get('/video', IndexController.video)

export default router;