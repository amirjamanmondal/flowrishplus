const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cors = require("cors");


dotenv.config();

const app = express();
const port = process.env.PORT || 5080;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:5000/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle the authentication process
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // Serialize the user object to store in the session
  done(null, user);
});
passport.deserializeUser((user, done) => {
  // Deserialize the user object from the session
  done(null, user);
});

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login with googgle</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureMessage: "Failed to login" }),
  (req, res) => {
    res.redirect('http://localhost:5173/profile')
  }
);

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ name: req.user._json });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).send("Logout failed");
    }
    res.status(401).json({ message: "Logged out successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
