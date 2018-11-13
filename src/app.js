const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfo = require('./views/planet_info_view.js');
const MenuView = require('./views/menu_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
});
