var Food = require('../models/food');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all foods
exports.food_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food list');
};

// Display detail page for a specific food
exports.food_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food detail' + req.params.id );
};

// Display food create form on GET
exports.food_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food create GET' );
};

// Handle food create on POST
exports.food_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food create POST' );
};

// Display food delete form on GET
exports.food_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food delete GET' );
};

// Handle food delete on POST
exports.food_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food delete POST' );
};

// Display food update form on GET
exports.food_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food update GET' );
};

// Handle food update on POST
exports.food_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Food update POST' );
};