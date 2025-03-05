import express from 'express';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.get('/', (req, res, next) => {
    res.json({ message: 'Welcome to VideoTube' });
});

app.use(errorHandler);

export default app;
