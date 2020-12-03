const { Queue, displayQ } = require("../queue/Queue");
const store = require("../../store");
const { cats, dogs } = require("../../store");

// Set up initial data.
// --------------------

const catsQ = new Queue();
const dogsQ = new Queue();

store.cats.forEach((cat) => catsQ.enqueue(cat));
store.dogs.forEach((dog) => dogsQ.enqueue(dog));

// --------------------

const CatService = {
  getCats() {
    const displayCats = displayQ(catsQ);
    return displayCats;
  },
  getFirstCat() {
    return catsQ.peek();
  },
  adoptCat() {
    catsQ.dequeue();
    return catsQ;
  },
};

const DogService = {
  getDogs() {
    const displayDogs = displayQ(dogsQ);
    return displayDogs;
  },
  getFirstDog() {
    return dogsQ.peek();
  },
  adoptDog() {
    dogsQ.dequeue;
    return dogsQ;
  },
};

module.exports = {
  CatService,
  DogService,
};
