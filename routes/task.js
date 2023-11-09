import { Router } from "express";
import * as controllers from "../controllers/task.js"

const router = Router()

router.get("/", controllers.getTasks);
router.get("/:id", controllers.getTask);
router.post("/", controllers.createTask);
router.put("/:id", controllers.updateTask);
router.delete("/:id", controllers.deleteTask);

export default router