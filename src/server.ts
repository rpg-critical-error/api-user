import Express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routers';

/**
 * Represents express server.
 */
export class Server {
    app = Express();

    constructor() {
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware() {
        this.app.use(cors());
        this.app.use(Express.json());
    }

    setRoutes() {
        this.app.get('/', (req, res) => {
            res.send('Funcionando :)');
        });
        this.app.use(router);
    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App starts on http://localhost:${process.env.PORT}/`);
        });
    }
}

export default new Server();
