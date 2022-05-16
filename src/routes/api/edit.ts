import express from 'express';

// Create Router Object
const edit = express.Router();


edit.get('/', (req,res)=>{
    res.send('Edit Route');
});

export default edit;