import express from "express";
import productRouter from './products.mjs';
import adsRouter from './ads.mjs';

const Router = express.Router();

Router.use('/products', productRouter);
Router.use('/ads', adsRouter);
export default Router;