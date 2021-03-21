import express, {Request, Response, Router, Express} from 'express';
import bodyParser from 'body-parser';
import router from './route';

const app: Express = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const port: number = Number(process.env.PORT) || 8050;

app.use(express.static('dist'));

const routes: Router[] = Object.values(router);
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.sendFile('/dist/index.html');
});

app.listen(port);
console.log(`App listening on ${port}`);
