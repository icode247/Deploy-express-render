import { Request, Response } from "express";
import { create, getAll, updateOne } from "../service/taskService";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(name)
    const task = await create({ name, completed: false, id: null});
    res.status(200).json(task);
  } catch (e) {
    res.status(500).json("an error occured");
    console.log(e);
  }
};

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const tasks = await getAll();
    res.status(201).json(tasks);
  } catch (e) {
    res.status(500).json("an errir occured");
    console.log(e);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const tasks = await updateOne(req.params.id);
    res.status(201).json(tasks);
  } catch (e) {
    res.status(500).json("an errir occured");
    console.log(e);
  }
};
