maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';

const customLayerName = "custom-layer";
let customLayer = null;
let tilesToMake = 0;

let onMadeATile = null;
      
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
      console.log("refresh!");
      resolve(evt.data)
    };
  })
}



maptilersdk.addProtocol('custom_protocol', (params, callback) => {
  const [z, x, y, timestamp] = params.url.split("/").pop().split("-").map(el => parseFloat(el));

  tilesToMake ++;

  console.log("Requesting tile: ", x, y, z);

  generateTilePixelOnWorker(x, y, z)
  .then((arrbuff) => {
    callback(null, arrbuff, null, null);
    tilesToMake --;

      if(onMadeATile) onMadeATile();
  })
 
  return { cancel: () => { } };
});


map.on("load", () => {

  map.addSource('custom-source', {
    type: "raster",
      tiles: [
        `custom_protocol://{z}-{x}-{y}-${Date.now()}`,
      ],
      tileSize: 512
  });
  source = map.getSource('custom-source');

  // source.on("data", (evt) => console.log("'data': ", evt))

  
  map.addLayer({
    id: customLayerName, 
    type: "raster",
    source: "custom-source",
    paint: {
      "raster-opacity-transition": {duration: 1000, delay: 0},
    }
  })
  customLayer = map.getLayer(customLayerName);

  // removes the fade transition
  // map.setPaintProperty(customLayerName, "raster-opacity-transition", {duration:1500, delay:1500})

})

function hideLayer() {
  map.setPaintProperty(customLayerName, "raster-opacity", 0, {validate: false})
}


function showLayer() {
  map.setPaintProperty(customLayerName, "raster-opacity", 1, {validate: false})
}

function updateLayer() {
  let isWaitingForAllTilesReady = true;
  source.tiles[[`custom_protocol://{z}-{x}-{y}-${Date.now()}`]];
  // hideLayer();
  

  // onMadeATile = () => {
  //   console.log("tilesToMake", tilesToMake);
  //   if(tilesToMake === 0) {

  //     onMadeATile = null;
  //     showLayer();
  //   }
  // }

  source.load();

}