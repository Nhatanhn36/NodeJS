const db = require("../models");
const {Op} = require("sequelize");
const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const newTutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published
    }

    Tutorial.create(newTutorial)
        .then(data => {
            res.send(data);
        });
};

exports.update = (req, res) => {
    const id = req.params.tutorialId;

    Tutorial.update(req.body, { where: {id: id} })
        .then(data => {
            res.send(data);
    })
}

exports.delete = (req, res) => {
    const id = req.params.tutorialId;

    Tutorial.destroy({where: {id : id} })
        .then(data => {
            res.send("Delete Tutorial successfully!");
        })
}

exports.findById = (req, res) => {
    const id = req.params.tutorialId;

    Tutorial.findByPk(id)
        .then(data => {
            res.send(data);
        })
}

exports.findAllPublished = (req, res) => {
    Tutorial.findAll({where: {published: 1} })
        .then(data => {
            res.send(data);
        });
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
};

exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        });
};


