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
  const input = { body: { name: 'Dayanne', email: ['dayannebarbosall@gmail.com'], phone: ['81997503145', '81981549315'] } };

  const lead = await pipedrive.PersonsController.addAPerson(input, (error, response, context) => {
    if (error) {
      res.send(error);
    }
  });

  res.send(lead);
});

module.exports = router;
