import { Router } from "express";
import { signIn, signOut, signUp } from "../controller/auth.controller";

const authRouter = Router();

// Path: api/v1/auth/signup. post -> PASS SOME DATA
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;