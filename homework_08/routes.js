let express = require('express');
let router = express.Router();
let starsMethods = require('./controllers/handlers');
let bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/rockstars', starsMethods.get);
router.get('/rockstar/:id', starsMethods.getId);
router.post('/rockstar', starsMethods.post);
router.put('/rockstar/:id', starsMethods.put);
router.delete('/rockstar/:id', starsMethods.delete);

module.exports = router;