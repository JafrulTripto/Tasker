import {RequestHandler} from 'express';


export const getTasks:RequestHandler = (req, res, next) => {
    res.json("Get route executing");
}

export const createTask:RequestHandler = (req, res, next) => {
    console.log(req.body);
}
