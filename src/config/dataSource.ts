import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOSTNAME,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
});
