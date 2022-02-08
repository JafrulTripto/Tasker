import express from 'express';
import dotenv from 'dotenv';

import taskRoutes from './routes/taskRoutes'

dotenv.config();


const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/tasks', taskRoutes);

server.listen(port, ()=> {
    console.log("server is running on " + port);
});
