import {
  createTask,
  getAllTask,
  updateTask,
} from "../controllers/taskController";
import express, { Router } from "express";

const router: Router = express.Router();

router.route("/task").get(getAllTask).post(createTask).put(updateTask);

export default router;
