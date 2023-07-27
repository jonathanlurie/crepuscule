maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';
      
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.OUTDOOR,
  hash: true,
});

// map.showTileBoundaries = true;





// maplibregl.addProtocol('custom', (params, callback) => {
//   fetch(`https://${params.url.split("://")[1]}`)
//       .then(t => {
//           if (t.status == 200) {
//               t.arrayBuffer().then(arr => {
//                   callback(null, arr, null, null);
//               });
//           } else {
//               callback(new Error(`Tile fetch error: ${t.statusText}`));
//           }
//       })
//       .catch(e => {
//           callback(new Error(e));
//       });
//   return { cancel: () => { } };
// });

map.on("load", () => {

  map.addSource('custom-source', {
    type: "raster",
      tiles: [
        "https://api.maptiler.com/tiles/4a89ae95-4eb6-44d7-9715-7a53fc564797/{z}/{x}/{y}.png?key=bod4IIn9bwK8mnZIk49v",
      ],
      tileSize: 512
  });
  
  map.addLayer({
    id: "custom-layer", 
    type: "raster",
    source: "custom-source",
    minzoom: 0,
    maxzoom: 7,
  })

})

