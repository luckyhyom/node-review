import express from 'express';
import {body, validationResult,param} from 'express-validator';

const app = express();

app.use(express.json());

function validation(req,res,next) { 
    const error = validationResult(req);
    if(error.isEmpty()){
        console.log('test');
        return next();
    }

    return res.status(400).send({"message":error.array()});
}

app.post(
    '/id',
    [body('name').isLength({ min: 3 }).withMessage('it`s way too short!'),validation],
    (req,res)=> {
        console.log(req.body);
        res.send(req.body);
});

app.get('/:email',
    [param('email').isEmail().withMessage('this is supposed to be Email'),
    validation],
(req,res)=>{
console.log(req.params);
// message라는 이름으로 값을 담는다.
res.send(req.body);
});

app.use((err,req,res,next)=>{
    console.error(err);
})

app.listen(8080);