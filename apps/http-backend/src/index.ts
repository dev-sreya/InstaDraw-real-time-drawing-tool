import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from './middleware';
import { CreateUserSchema, SigninSchema,CreateRoomSchema } from '@repo/common/types';

const app = express();
const port = 3000;



app.post('/signup', (req, res) => {
    // zod validation
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            "message": "Invalid input",
        })
        return;
    } 
    res.json({
         userid: 123
})

})

app.post('/signin', (req, res) => {

    const data = SigninSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            "message": "Invalid input",
        })
        return;
    } 

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

     const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            "message": "Invalid input",
        })
        return;
    } 
    //db call
    res.json(
       { roomid: 123}
    ) 
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});