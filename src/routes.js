import { Router } from 'express'

import IndexController from './Controller/IndexController.js';

const router = new Router();

router.get('/', IndexController.index)
router.get('/video', IndexController.video)

export default router;