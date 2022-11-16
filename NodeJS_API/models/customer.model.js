const conn = require('./db');

const Customer = function (customer){
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
    this.imageURL = customer.imageURL;
};

Customer.getAll = result => {
    conn.query('SELECT * FROM customers', (error, res) => {
        if (error)
            console.log(error);

        result(null, res);
    });
}

Customer.create = (newCustomer, result) => {
    conn.query('INSERT INTO customers SET ?', newCustomer, (error, res) => {
        if(error)
            console.log(error);

        result(null, { id: res.insertId, ...newCustomer});
    });
}

Customer.update = (customerId, updatingCustomer, result) => {
    conn.query('UPDATE customers SET email = ?, name = ?, active = ? WHERE customerId = ?',
        [updatingCustomer.email, updatingCustomer.name, updatingCustomer.active, customerId] ,
        (error, res) => {
        if(error)
            console.log(error);

        result(null, { id: customerId, ...updatingCustomer});
    });
}

Customer.findById = (customerId, result) => {
    conn.query('SELECT * FROM customers WHERE customerId = ${customerId}', (error, res) => {
        if(error)
            console.log(error)

        if(res.length) {
            console.log('Found customer: ', res[0])
            result(null, res[0]);
        }

        //not found customer with the ID
        result({ kind:'not found'}, null);
    })
}

module.exports = Customer;