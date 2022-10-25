import  express, { Express } from 'express';
import * as dotenv from 'dotenv'
import router from './routes/taskRoutes'
import {myDataSource} from './config/dataSource'

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
app.use(express.json());
app.use('/api', router);
app.listen(PORT, ()=> console.log(`Server listening to port ${PORT}`));