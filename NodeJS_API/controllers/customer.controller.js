const Customer = require('../models/customer.model');

exports.getAll = (req, res) => {
    Customer.getAll(function (error, data){
        if(error)
            console.log(error);

        res.send(data);
    });
}

exports.create = (req, res) => {
    const newCustomer = {
        email: req.body.email,
        name: req.body.name,
        active: req.body.active,
        imageURL: req.body.imageURL
    }

    Customer.create (newCustomer, (error, data) => {
        if(error)
            console.log(error);

        res.send(data);
    });
}

exports.update = (req, res) => {

    const updatingCustomer = {
        email: req.body.email,
        name: req.body.name,
        active: req.body.active,
        imageURL: req.body.imageURL
    }

    Customer.update (req.params.customerID, updatingCustomer ,(error, data) => {
        if(error)
            console.log(error);

        res.send(data);
    });
}

exports.findByID = (req, res) => {
    Customer.findById(req.params.customerId, (error, data) => {
        if(error)
            console.log(error);
        res.send(data);
    });
}
