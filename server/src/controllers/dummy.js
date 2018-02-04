import express from 'express';

const router = express.Router();

router.get('/dummy', (_, res) => {
  res.send({
    message: 'Hello World!',
  });
});

module.exports = router;
