var express = require('express');
const earbud_controller= require('../controllers/earbud')
var router = express.Router();

/* GET home page. */
router.get('/',  earbud_controller.earbud_view_all_Page);

module.exports = router;