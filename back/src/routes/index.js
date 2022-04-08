const express = require('express')
const router = express.Router()
const passport = require('passport')




router.post('/signup', passport.authenticate('local-registro', {
    successRedirect: '/home',
    failureRedirect: '/',
    passReqToCallback: true
}))

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/entidades',
    failureRedirect: '/login',
    passReqToCallback: true
}))

router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('/')
})

router.get('/home', isAuthenticated, (req, res, next) => {
    res.render('home')
})

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

module.exports = router