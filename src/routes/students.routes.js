import { Router } from "express";

import {
    getStudents,
    getStudentsById,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../"

const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentRouter.get("/:id", getStudentsById);
studentRouter.post("/", createStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.put("/:id", deleteStudent);

export default studentsRouter;