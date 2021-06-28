const epxress = require('express');
const glob = require('glob');
const path = require('path');
const app = epxress();
const userRoute = require('./modules/user/routes');

const router = epxress.Router();

const userRoutes = require('./modules/user/routes');

require('./config/db').connectDB(app);
require('dotenv').config();

app.use(epxress.json());
app.use(epxress.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.status(200).send({ message: "Welcome to APIS!!" })
});

// app.use('/api/v1/user', userRoutes)

app.use(() => {
    glob('./modules/*/routes.js', (err, files) => {

        if (err) {
            throw new Error(err);
        }

        files.forEach((file) => {
            let route = require(file);
            let module = '';
            if (file.includes('user')) {0
                module = 'user';
            } else if (file.includes('post')) {
                module = 'post'
            }
            app.use(`/api/v1/${module}`, route);
        });

        console.log('routes created');
    })
});

// app.use((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     if (req.method === 'OPTIONS') {
//         res.writeHead(200);
//         res.end();
//         return;
//     }
// })

app.use((err, req, res, next) => {

    console.log('Error in request::: ', err.message)
    const erorObj = Object.assign(err);

    if (res.headersSent) {
        return next(err)
    }

    if (!err.status) {
        erorObj.status = 500;
    }
    if (!err.message || (err.status > 400 && err.status <= 500)) {
        erorObj.message = 'Something went wrong';
    }

    res.status(erorObj.status).send({ message: erorObj.message })

});

const port = process.env.SERVER_PORT;
app.listen(port, () => { console.log(`server is listenig on port:: ${port}`) })

module.exports = app;