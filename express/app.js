// 이전까지는 http의 createServer안에서 if문으로 각각의 요청들을 처리했었다.
// express를 이용하여, get,post,등의 요청들을 처리할 수 있다.

// json을 보낼때는 res.json({name:value})
// json을 받을 때는 (POST) req.body
import express from 'express';
import userRouter from './router/user.js';
import postsRouter from './router/post.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'));


app.use('/user',userRouter);
app.use('/posts',postsRouter);

app.use((error,req,res,next)=>{
    res.status(500).json({message:"Something went Wrong"})
})

app.listen(8080);
