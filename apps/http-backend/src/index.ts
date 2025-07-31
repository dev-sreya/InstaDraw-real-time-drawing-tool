import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from './middleware';

const app = express();
const port = 3000;



app.post('/signup', (req, res) => {
    //upgrade to zod validation
    res.json({
         userid: 123
})

})

app.post('/signin', (req, res) => {

    const userid = 1
    const token = jwt.sign(
        {userid},
        JWT_SECRET
    )

    res.json(
        {token}
    )
})

app.post('/room', middleware, (req, res) => {
    //db call
    res.json(
       { roomid: 123}
    ) 
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});