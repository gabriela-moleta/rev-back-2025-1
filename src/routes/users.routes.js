import { Router } from "express";

import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from "../"

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUsersById);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.put("/:id", deleteUser);

export default usersRouter;