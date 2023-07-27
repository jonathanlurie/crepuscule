maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';
      
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.BACKDROP,
  hash: true,
  maxPitch: 85,
  // terrain: true,
});

// map.showTileBoundaries = true;


async function generateTilePixelOnWorker(x, y, z) {
  return new Promise((resolve) => {
    const tileWorker = new Worker("tileWorker.js");
    tileWorker.postMessage({x, y, z});
  
    tileWorker.onmessage = (evt) => {
      resolve(evt.data)
    };
  })
}



maptilersdk.addProtocol('custom_protocol', (params, callback) => {
  const [z, x, y] = params.url.split("/").pop().split("-").map(el => parseFloat(el));

  generateTilePixelOnWorker(x, y, z)
  .then((arrbuff) => {
    callback(null, arrbuff, null, null);
  })
 
  return { cancel: () => { } };
});


let layer = null;

map.on("load", () => {

  map.addSource('custom-source', {
    type: "raster",
      tiles: [
        "custom_protocol://{z}-{x}-{y}",
      ],
      tileSize: 512
  });
  
  layer = map.addLayer({
    id: "custom-layer", 
    type: "raster",
    source: "custom-source",
    minzoom: 0,
    // maxzoom: 7,
  })

})

