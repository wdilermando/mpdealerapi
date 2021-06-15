const express = require('express');

const lead = require('./lead');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/lead', lead);

module.exports = router;
