import app from './src/app';
import { config } from './src/config/config';

const startServer = async () => {
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`App is running at http://localhost:${port}`);
    });
};

startServer();
