// Imports
import express from 'express';
import routes from './routes/index';

// Create Application Object
const app: express.Application = express();
const port: number = 3000;


app.use('/api',routes);
 


// Run the Server
app.listen(port, async():Promise<void> =>{
    console.log(`server started at localhost:${port}`)

});