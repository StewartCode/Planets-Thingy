const PubSub = require('../helpers/pub_sub.js');


const MenuView = function(planetArray) {
  this.planetArray = planetArray;
};

// MenuView.prototype.bindEvents = function () {
//   PubSub.subscribe('solarSystem:AllPlanetsReady', (event) =>{
//      const allPlanets = event.detail;
//      for (planet of allPlanets) {
//        planet.addEventListener()
//
//      }
//   })
// };

// const infoDiv = document.querySelector(‘div#animal-info’)
//  const animalInfoDisplay = new AnimalInfoView(infoDiv);
//  animalInfoDisplay.bindEvents();

MenuView.prototype.bindEvents = function () {
  for (planet of this.planetArray) {
    planet.addEventListener("click", (event) => {
      console.log(event);
      const planetName = event.target.textContent;
      console.log("event.target.textContent = ", event.target.textContent);
      PubSub.publish('MenuView:planet-name', planetName);
    });
  };
};

module.exports = MenuView;
