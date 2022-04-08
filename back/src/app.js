const express = require('express')
const engine = require('ejs-mate')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')

//Initializations
const app = express()
require('./database')
require('./passport/local-auth')

//settings
app.set('port', process.env.PORT || 3000
)
app.set('ejs', engine)
app.set('view engine', 'ejs')


//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    app.locals.mensajeRegistro = req.flash('mensajeRegistro')
    app.locals.mensajeLogin = req.flash('mensajeLogin')
    app.locals.user = req.user
    next()
})

//static files
app.use(express.static(__dirname + '/public'));

//routes
app.use('/', require('./routes/index'))
app.use('/login', require('./routes/index'))



module.exports = app;