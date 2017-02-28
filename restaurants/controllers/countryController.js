var Country = require('../models/country');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all countries
exports.country_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country list');
};

// Display detail page for a specific country
exports.country_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country detail' + req.params.id );
};

// Display country create form on GET
exports.country_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country create GET' );
};

// Handle country create on POST
exports.country_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country create POST' );
};

// Display country delete form on GET
exports.country_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country delete GET' );
};

// Handle country delete on POST
exports.country_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country delete POST' );
};

// Display country update form on GET
exports.country_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country update GET' );
};

// Handle country update on POST
exports.country_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Country update POST' );
};
