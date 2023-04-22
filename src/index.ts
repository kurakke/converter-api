import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || "8080";
const userRouter = require('./routes/user.route')
const textRouter = require('./routes/text.route')

app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})
app.use('/user', userRouter);
app.use('/text', textRouter);

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));