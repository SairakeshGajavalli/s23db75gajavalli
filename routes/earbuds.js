var express = require('express');
const earbud_controller= require('../controllers/earbud')
var router = express.Router();

/* GET home page. */
router.get('/',  earbud_controller.earbud_view_all_Page);
/* GET detail costume page */
router.get('/detail', earbud_controller.earbud_view_one_Page);

module.exports = router;