import { NextFunction, Request, Response } from 'express';
import * as tweetRepository from '../data/tweets'

export async function getAll(req :Request, res :Response, next :NextFunction): Promise<void> {
    const tweets =  await tweetRepository.getAll();
    res.send(tweets);
}