const express = require('express');
const pipedrive = require('../utils/pipedriveApi');

const router = express.Router();

router.get('/', async (req, res) => {
  const leads = await pipedrive.PersonsController.getAllPersons({}, (error, response, context) => {
    if (error) {
      res.send(error);
    }
  });
  res.send(leads);
});

router.post('/', async (req, res) => {
  if (!req.body || !req.body.name || !req.body.email) {
    res.send('Set user info');
  }
  const { name, email } = req.body;
  const input = {
    body: { name, email }
  };

  const lead = await pipedrive.PersonsController.addAPerson(input, (error, response, context) => {
    if (error) {
      res.send(error);
    }
  });

  res.send(lead);
});

module.exports = router;
