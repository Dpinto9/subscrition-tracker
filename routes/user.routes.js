import { Router } from 'express';
import { getUserById, getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';

import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get( '/', getUsers);

userRouter.get( '/:id', authorize, getUserById);

userRouter.post( '/', createUser);

userRouter.put( '/:id', authorize, updateUser);

userRouter.delete( '/:id', authorize, deleteUser);

export default userRouter;