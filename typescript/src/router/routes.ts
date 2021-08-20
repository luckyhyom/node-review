import express from 'express';
import * as tweetController from '../controller/tweetController';

const router = express.Router();

router.get('/',tweetController.getAll);

export default router;