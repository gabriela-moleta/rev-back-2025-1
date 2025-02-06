import { Router } from "express";
import studentsRouter from "./students.routes";
import usersRouter from "./users.routes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).json({ message: "Vai Corinthians!"});
})

router.use("/students", studentsRouter);
router.use("/users", usersRouter);

export default { router };