const express = require("express");
const json = require("body-parser").json();

const { CatService, DogService } = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

//GET Requests
// Return all pets currently up for adoption.

//Cat Route
router
  .route("/api/cat")
  .get((req, res, next) => {
    const cats = CatService.getCats();
    if (!cats) {
      return res.status(400).json({
        error: "There are currently no cats to adopt",
      });
    }
    return res.json(cats);
  })
  //delete cat from adoption
  .delete((req, res, next) => {
    const cats = CatService.adoptCat();
    if (!cats) {
      return res.status(400).json({
        error: "There are currently no cats",
      });
    }
    res.status(200).send(cats);
  });

//Dog Route
router
  .route("/api/dog")
  .get((req, res) => {
    const dogs = DogService.getDogs();
    if (!dogs) {
      return res.status(400).json({
        error: "There are currently no dogs to adopt",
      });
    }
    return res.json(dogs);
  })
  .delete((req, res, next) => {
    // Remove a dog from adoption.
    const dogs = DogService.adoptDog();
    if (!dogs) {
      return res.status(400).json({
        error: "There are currently no dogs",
      });
    }
    return res.status(200).send(dogs);
  });

module.exports = router;
