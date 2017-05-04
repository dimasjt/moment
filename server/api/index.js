import { Router } from 'express';
import validate from 'express-validation';

import validation from './validation';
import {
  users,
} from './controllers';

const router = Router();

router.get('/', async (req, res) => {
  res.send('API');
});

router.post('/register', validate(validation.register), users.register);

router.get('/feed', async (req, res) => {
  res.status(200).json({ messages: ['helo'] });
});

// send error validation parameters
router.use((err, req, res, next) => {
  // specific for validation errors
  if (err instanceof validate.ValidationError) return res.status(err.status).json(err);

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);
  } else {
    return res.status(500);
  }
});

export default router;
