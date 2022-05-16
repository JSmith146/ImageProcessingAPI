import express from 'express';

// Create Router Object
const image = express.Router();


image.get('/', (req,res)=>{
    res.send('Image Route');
});

export default image;