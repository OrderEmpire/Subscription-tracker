import { Router } from "express";

const authRouter = Router();

authRouter.get('/sign-up', (req, res) => res.send({ title: 'Sign up' }));
authRouter.get('/sign-up', (req, res) => res.send({ title: 'Sign in' }));
authRouter.get('/sign-up', (req, res) => res.send({ title: 'Sign out' }));

export default authRouter;