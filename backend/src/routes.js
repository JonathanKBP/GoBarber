import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jonathan Kevin',
    email: 'jonathan.k@hotmail.com',
    password_hash: '12378965',
  });
  return res.json(user);
});

export default routes;
