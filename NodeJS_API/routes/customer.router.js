const controller = require('../controllers/customer.controller');

module.exports = app => {
    app.get('/customers', controller.getAll);
    app.post('/customers', controller.create);
    app.put('/customers/:customerID', controller.update);
    app.get('/customers/:customerID',controller.findByID)
}