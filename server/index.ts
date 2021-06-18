import express from "express";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { loadConfig } from "./config";
// rest of the code remains same

const PORT = 8000;

const scopes = ['identify', 'email', 'guilds'];
const config = loadConfig();

passport.use(new DiscordStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:3000/api/auth/discord/callback',
  scope: scopes

},
(accessToken, refreshToken, profile, cb)=>{cb(null, profile) }
))

var app = express();

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser<string>((user, done) => {
  done(null, JSON.stringify(user));
})
passport.deserializeUser<string>((id, done) => {
  done(null, JSON.parse(id))
})

app.get('/api/auth/discord', passport.authenticate('discord'));
app.get('/api/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/api/auth/whoami') // Successful auth
});

app.get('/api/auth/whoami',(req, res) => { res.json(req.user) } )

// app.get('/api/auth/guilds', (req, res) => {res.json(req.user.guilds)})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
