function convertUInt8ArrayToPNG(uint8Array, width, height) {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Create an ImageData object from the UInt8Array
  const imageData = new ImageData(uint8Array, width, height);

  // Put the image data onto the canvas
  ctx.putImageData(imageData, 0, 0);

  // Convert the canvas to a data URL representing a PNG image
  const dataURL = canvas.toDataURL('image/png');

  return dataURL;
}


function pixelToLonLat(xInternal, yInternal, x, y, zoom, tileSize) {
  const n = 2.0 ** zoom;
  const lonDeg = x / n * 360.0 - 180.0;
  const latRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n)));
  const latDeg = latRad * 180.0 / Math.PI;

  // Calculate the size of a pixel in degrees at the given latitude
  const pixelSizeDeg = 360.0 / (n * tileSize);

  // Calculate the longitude and latitude based on the internal pixel coordinates
  const lon = lonDeg + (xInternal + 0.5) * pixelSizeDeg;
  const lat = latDeg + (yInternal + 0.5) * pixelSizeDeg;

  return [lon, lat];
}




maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';
      
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.OUTDOOR,
  hash: true,
});

map.showTileBoundaries = true;

const tileSize = 512;
const nbPixel = tileSize * tileSize;

function generateTilePixel(tileX, tileY, tileZ) {
  const tilePixels = new Uint8ClampedArray(nbPixel * 4);
  for (let i = 0; i < nbPixel * 4; i += 4) {
    const rowIndex = ~~((i / 4) / tileSize);
    const colIndex = (i / 4) % tileSize;
    tilePixels[i] = 250;
    tilePixels[i + 1] = ~~(colIndex / 2);
    tilePixels[i + 2] = 0;
    tilePixels[i + 3] = 100;
  }

  return tilePixels;
}




maptilersdk.addProtocol('custom_protocol', (params, callback) => {
  
  const [z, x, y] = params.url.split("/").pop().split("-");
  console.log("params", params, z, x, y);

  const tilePixels = generateTilePixel(x, y, z);

  const dataURL = convertUInt8ArrayToPNG(tilePixels, tileSize, tileSize);

  // console.log("dataURL", dataURL);

  fetch(dataURL)
      .then(t => {
          if (t.status == 200) {
              t.arrayBuffer().then(arr => {
                  callback(null, arr, null, null);
              });
          } else {
              callback(new Error(`Tile fetch error: ${t.statusText}`));
          }
      })
      .catch(e => {
          callback(new Error(e));
      });
  return { cancel: () => { } };
});

map.on("load", () => {

  map.addSource('custom-source', {
    type: "raster",
      tiles: [
        "custom_protocol://{z}-{x}-{y}",
      ],
      tileSize: 512
  });
  
  map.addLayer({
    id: "custom-layer", 
    type: "raster",
    source: "custom-source",
    minzoom: 0,
    // maxzoom: 7,
  })

})

