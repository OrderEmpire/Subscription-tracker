import { Router } from "express";

const userRouter = Router();

//GET /users --> get all users
//GET /users/id --> get user by id // 123 4132  

userRouter.get("/", (req, res) => res.send({title: 'GET all users'}));

userRouter.get("/:id", (req, res) => res.send({title: 'GET users details'}));

userRouter.post("/", (req, res) => res.send({title: 'create new users'}));

userRouter.put("/:id", (req, res) => res.send({title: 'Update user'}));

userRouter.delete("/:id", (req, res) => res.send({title: 'delete all users'}));

export default userRouter;