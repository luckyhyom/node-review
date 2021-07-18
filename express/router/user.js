import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('post:get');
})

router.get('/special',(req,res)=>{
    res.send('special!');
})

export default router;