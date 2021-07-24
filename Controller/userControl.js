var User = require('../models/userSchema');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res) {
    var User = new Product(
        {
            name: req.body.name,
            mail: req.body.mail
        }
    );

    User.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, users) {
        if (err) return next(err);
        res.send(users);
    })
};

exports.user_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};