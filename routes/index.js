import { Router } from "express";
import TasksRoutes from "./task.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the task api root!"));

router.use("/tasks", TasksRoutes);

export default router;