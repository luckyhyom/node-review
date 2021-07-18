import express from 'express';

const router = express.Router();

// user에 복붙해서 쓸 수 있다
router.get('/',(req,res)=>{
    res.send('post:get');
})

router.get('/special',(req,res)=>{
    res.send('special!');
})

export default router;