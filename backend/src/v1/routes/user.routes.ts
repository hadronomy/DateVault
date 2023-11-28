/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';

import {
  login,
  logout,
  profile,
  register,
} from '../../controllers/user.controller.js';
import { authRequired } from '../../middlewares/validateToken.js';
import { validateSchema } from '../../middlewares/validator.middleware.js';
import { loginSchema, registerSchema } from '../../schemas/register.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router;
