const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfo = require('./views/planet_info_view.js');
const MenuView = require('./views/menu_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);

  const planetArrayFromHTML = document.querySelectorAll('.planet-menu-item');
  const menuView = new MenuView(planetArrayFromHTML);
  menuView.bindEvents();

});
