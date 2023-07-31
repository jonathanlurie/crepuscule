maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';
  
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.BACKDROP,
  hash: true,
  maxPitch: 85,
});

const crepusculeLive = new CrepusculeLive(map, {debug: false});

// map.showTileBoundaries = true;


map.on("load", () => {
  crepusculeLive.init();
})
