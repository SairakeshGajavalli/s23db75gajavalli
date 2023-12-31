var Earbud = require('../models/earbudSchema');

// List of all Earbuds
exports.earbud_list = async function(req, res) {
    try{
        theEarbuds = await Earbud.find();
        res.send(theEarbuds);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};

// for a specific Earbuds.
exports.earbud_detail = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Earbud.findById( req.query.id)
        res.render('earbuddetail',
    { title: 'Earbud Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle Earbud create on POST.
exports.earbud_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Earbud();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"earbuds_brand": "Beats", "earbuds_quantity": "5 items", "earbuds_cost": 180} 
    document.earbuds_brand = req.body.earbuds_brand;
    document.earbuds_quantity = req.body.earbuds_quantity;
    document.earbuds_cost = req.body.earbuds_cost;
    try{
        let result = await document.save();
        res.send(result);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};

// Handle Earbud delete form on DELETE.
exports.earbud_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Earbud.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Earbud update form on PUT.
exports.earbud_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Earbud.findById( req.params.id)
        // Do updates of properties
        if(req.body.earbuds_brand) toUpdate.earbuds_brand = req.body.earbuds_brand;
        if(req.body.earbuds_quantity) toUpdate.earbuds_quantity = req.body.earbuds_quantity;
        if(req.body.earbuds_cost) toUpdate.earbuds_cost = req.body.earbuds_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.earbud_view_all_Page = async function(req, res) {
    try{
        theEarbuds = await Earbud.find();
        res.render('earbuds', { title: 'Earbud Search Results', results: theEarbuds });
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.earbud_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Earbud.findById( req.query.id)
        res.render('earbuddetail',{ title: 'Earbud Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
 };


// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earbud_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earbudcreate', { title: 'Earbud Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle building the view for updating a earbud.
// query provides the id
exports.earbud_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Earbud.findById(req.query.id)
    res.render('earbudupdate', { title: 'Earbud Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle a delete one view with id from query
exports.earbud_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Earbud.findById(req.query.id)
    res.render('earbuddelete', { title: 'Earbud Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };