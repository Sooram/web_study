var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CountrySchema = Schema(
    {
        name: {type: String, required: true, max: 100}
    }
);

CountrySchema
 .virtual('url')
 .get(function () {
    return '/catalog/country' + this._id;
});

module.exports = mongoose.model('Country', CountrySchema);