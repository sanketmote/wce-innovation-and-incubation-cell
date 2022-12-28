const Express = require('./services/ServiceHost').Express;
var expressApp = require('./services/ServiceHost').expressApp;

const cors = require('cors');

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");
})

// Import Routes  
var Register = require('./routes/Register/register');
var Login = require('./routes/Login/login');

expressApp.use(cors({ origin: '*' }));


expressApp.use('/api/register', Register)
expressApp.use('/api/login', Login)

expressApp.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

expressApp.listen(8000, function () {
    console.log("server has started on port 8000");
})

