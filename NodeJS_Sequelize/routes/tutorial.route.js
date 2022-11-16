module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Create new Tutorial
    router.post("/", tutorials.create);

    // Update Tutorial by Id
    router.put("/:tutorialId", tutorials.update);

    // Delete Tutorial by Id
    router.delete("/:tutorialId", tutorials.delete);

    // Retrieve Tutorial by Id
    router.get("/findById/:tutorialId", tutorials.findById);

    //retrived all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    //delete all tutorial
    router.delete('/', tutorials.deleteAll);

    app.use('/api/tutorials', router);
};