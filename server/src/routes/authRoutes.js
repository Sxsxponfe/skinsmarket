const express = require('express');
const passport = require('passport');
const router = express.Router();

// Ruta para iniciar login con Steam
router.get('/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    // Esto no se llama porque el redirect lo maneja Steam
  }
);

// Ruta de retorno desde Steam después de login
router.get('/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    // Aquí puedes redirigir al frontend con sesión activa
    res.redirect('http://localhost:5173'); // o agregar token como query
  }
);

module.exports = router;
