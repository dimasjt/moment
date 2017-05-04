import { Router } from 'express';

import {
  users,
} from './controllers';

const router = Router();

router.get('/', async (req, res) => {
  res.send('API');
});

router.post('/register', users.register);

router.get('/feed', async (req, res) => {
  res.status(200).json({ messages: ['helo'] });
});

export default router;
