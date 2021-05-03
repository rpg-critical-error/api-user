import Express from 'express';
import 'dotenv/config';
import cors from 'cors';

export class Server {
    app = Express();

    constructor() {
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware() {
        this.app.use(cors());
    }

    setRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Funcionando :)");
        });
    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App starts on http://localhost:${process.env.PORT}/`)
        })
    }

}

export default new Server();