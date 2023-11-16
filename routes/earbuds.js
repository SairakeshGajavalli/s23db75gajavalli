var express = require('express');
const earbud_controller= require('../controllers/earbud')
var router = express.Router();

/* GET home page. */
router.get('/',  earbud_controller.earbud_view_all_Page);
/* GET detail costume page */
router.get('/detail', earbud_controller.earbud_view_one_Page);
/* GET create costume page */
router.get('/create', earbud_controller.earbud_create_Page);
/* GET create update page */
router.get('/update', earbud_controller.earbud_update_Page);
/* GET delete costume page */
router.get('/delete', earbud_controller.earbud_delete_Page);



module.exports = router;