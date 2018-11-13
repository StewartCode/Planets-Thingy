const PubSub = require('../helpers/pub_sub.js');
const planetData = require('../data/planets.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:planet-name', (event) => {
    const planetName = event.detail;
    console.log('planets', planetData);
    const foundPlanet = planetData.find((planet) => {
      return planet.name === planetName;
    });
    console.log(foundPlanet);
  });
};










module.exports = SolarSystem;
