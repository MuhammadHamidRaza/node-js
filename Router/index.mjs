import express from "express";
import productRouter from './products.mjs';
import adsRouter from './ads.mjs';
import UserRouter from "./users.mjs";

const Router = express.Router();

Router.use('/products', productRouter);
Router.use('/ads', adsRouter);
Router.use('/user', UserRouter);
export default Router;