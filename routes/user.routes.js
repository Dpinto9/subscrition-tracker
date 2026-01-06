import { Router } from 'express';
import { getUserById, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get( '/', getUsers);

userRouter.get( '/:id', getUserById);

userRouter.post( '/', ( req, res ) => {
    res.send( 'Create new user' );
});

userRouter.put( '/:id', ( req, res ) => {
    res.send( 'Update user' );
});

userRouter.delete( '/:id', ( req, res ) => {
    res.send( 'Delete user' );
});

export default userRouter;