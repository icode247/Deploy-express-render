import { Task } from "../entity/task.entity";
import { myDataSource } from "../config/dataSource";

export const getAll = async (): Promise<Task[]> => {
  return await myDataSource.getRepository(Task).find();
};

export const create = async (task: Task): Promise<Task> => {
  return await myDataSource.getRepository(Task).save(task);
};
// export const getOne = async (id: string): Promise<Task> => {
//   return await myDataSource.getRepository(Task).findOneBy({ id });
// };

export const updateOne = async (id: string): Promise<any> => {
  return await myDataSource
    .getRepository(Task)
    .update({ id }, { completed: true });
};
