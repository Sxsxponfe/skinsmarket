const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

require('./config/passport');

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(session({ secret: 'steam_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Steam Skins Marketplace API'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});