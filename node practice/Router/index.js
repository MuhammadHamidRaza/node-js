import express from 'express';
import productRouter from './product.js';

const Router = express.Router();



Router.use('/product',productRouter)


export default Router;