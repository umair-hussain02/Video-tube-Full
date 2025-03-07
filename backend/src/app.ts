import express from 'express';
import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to VideoTube' });
});

app.use('/api/v1/users', userRouter);

app.use(errorHandler);

export default app;
