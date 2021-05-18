import express from 'express';
import bodyParser from 'body-parser';
import runnerRoute from './routes/runner.js';
import bootstrapRoute from './routes/bootstrap.js';
import sessionRouter from './routes/session.js';


const app = express();
const PORT = 80;
const HOST = '192.168.1.22';


app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/runner',runnerRoute);
app.use('/bootstrap',bootstrapRoute);
app.use('/getsession',sessionRouter);

app.get('/',function(req,res){
    res.send("hello");
});

app.listen(PORT,HOST,()=>console.log())