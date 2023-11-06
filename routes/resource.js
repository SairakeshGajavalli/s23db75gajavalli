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

module.exports = router;