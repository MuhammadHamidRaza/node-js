import express from 'express';
import router from './Router/index.js';

const app = express();
console.log("hello");
app.use(express.json());


app.use('/', router);

app.listen(3001, () => {
    console.log("Server connected to localhost!");
});
