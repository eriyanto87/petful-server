const { Queue } = require("../queue/Queue");
const { displayQ } = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

let peeps = new Queue();
store.people.forEach((person) => peeps.enqueue(person));

// --------------------
const PeopleService = {
  //return all people in queue
  getAllPeople() {
    const displayPeople = displayQ(peeps);
    return displayPeople;
  },
  //add new person to queue
  newAdopter(name) {
    peeps.enqueue(name);
    return peeps;
  },
  //remove person from queue
  removeAdopter() {
    peeps.dequeue();
    return peeps;
  },
};

module.exports = PeopleService;
