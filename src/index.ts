import express, { Request, Response } from 'express';
// import userRouter from "./routes/user.route"
const app = express();
const port = process.env.PORT || "8080";
const userRouter = require('./routes/user.route')
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})
app.use('/user', userRouter);

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));