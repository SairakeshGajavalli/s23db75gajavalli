var express = require('express');
const earbud_controlers= require('../controllers/earbud')
var router = express.Router();

/* GET home page. */
router.get('/', earbud_controlers.earbud_view_all_Page);

module.exports = router;