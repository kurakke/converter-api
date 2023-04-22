import express, { Request, Response } from 'express';

const app = express();
const port = 8080;
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));