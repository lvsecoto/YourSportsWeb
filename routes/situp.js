var express = require('express');
var router = express.Router();

var situpCounter = 0;

router.get('/', function(req, res, next) {
  res.json(
    {
      'count': situpCounter
    }
  );
});

router.post('/', function (req, res) {
  situpCounter++;

  res.json({
    'message' : 'success'
  });
 })

module.exports = router;
