import express from 'express';
import {body} from 'express-validator';

const app = express();

app.use(express.json());

app.post(
    '/id',
    body('name').isLength({ min: 3 }).withMessage('it`s way too short!'),
    (req,res)=> {
        console.log(req.body);
        res.send(req.body);
});

app.post('/:message',(req,res)=>{

});

app.use((err,req,res,next)=>{
    console.error(err);
})

app.listen(8080);