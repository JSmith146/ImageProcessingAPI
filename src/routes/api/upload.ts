import express from 'express';

// Create Router Object
const upload = express.Router();


upload.get('/', (req,res)=>{
    res.send('Upload Route');
});

export default upload;