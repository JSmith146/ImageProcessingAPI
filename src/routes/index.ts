import express from 'express';
import {promises as fsPromises} from 'node:fs';

import upload from './api/upload';
import edit from './api/edit';
import image from './api/image';

// Create Router Object
const routes = express.Router();


routes.get('/', (req,res)=>{
    res.send('MAIN API ROUTE');
});

routes.use('/upload',upload);
routes.use('/edit', edit);
routes.use('/image', image);


export default routes;