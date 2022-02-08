import {Router} from 'express';
import { getTasks, createTask } from '../controllers/taskControllers';

const router = Router()

router.get('/', getTasks);

router.post('/createTask', createTask)

export default router;