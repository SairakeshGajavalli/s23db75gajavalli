var express = require('express');

var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var earbud_controller = require('../controllers/earbud');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// EARBUD ROUTES ///
// POST request for creating a Earbud. 
router.post('/earbuds', earbud_controller.earbud_create_post);

// DELETE request to delete Earbud.
router.delete('/earbuds/:id', earbud_controller.earbud_delete);

// PUT request to update Earbud.
router.put('/earbuds/:id', earbud_controller.earbud_update_put);

// GET request for one Earbud.
router.get('/earbuds/:id', earbud_controller.earbud_detail);

// GET request for list of all Earbud items.
router.get('/earbuds', earbud_controller.earbud_list);

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET create update page */
router.get('/update', secured, earbud_controller.earbud_update_Page);

/* GET create Earbud page */
router.get('/create', secured, earbud_controller.earbud_create_Page);

/* GET delete Earbud page */
router.get('/delete', secured, earbud_controller.earbud_delete_Page)


module.exports = router;