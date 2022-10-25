import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "dpg-cdbtr21a6gdjgo8rorj0-a",
  port: 5432,
  username: "datatase_user",
  password: "BLSYhmPhLcJjS647UUtxFOtrUaIKGl2Q",
  database: "datatase",
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
});
