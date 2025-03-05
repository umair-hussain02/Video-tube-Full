import app from './src/app';
import { config } from './src/config/config';
import connectDB from './src/config/db';

const startServer = async () => {
    await connectDB();
    // console.log(config.databaseUrl);

    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`App is running at http://localhost:${port}`);
    });
};

startServer();
