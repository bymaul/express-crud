import express, { Express, Response, Request } from 'express';
import UserRoute from './routes/UserRoute';
import { configDotenv } from 'dotenv';

configDotenv();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(UserRoute);

app.get('/', (req: Request, res: Response) => {
    res.json({
        express: '4.18.2',
        typescript: '5.3.3',
    });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
