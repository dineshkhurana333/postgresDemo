const express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', async (req, res) => {
    console.log(req.body)
    const { name } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
        },
    })
    res.json(user)
});

app.listen(8080, () => console.log(`server is listening on 8080`));