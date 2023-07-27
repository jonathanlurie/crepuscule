const tileSize = 128;
const nbPixel = tileSize * tileSize;
const bordeaux = [-0.5788583921992965, 44.84925934913024];

const now = +(new Date());

// Create a canvas element
const canvas = new OffscreenCanvas(tileSize, tileSize);
const ctx = canvas.getContext('2d');
const imageData = new ImageData(tileSize, tileSize);

const tilePixels = new Uint8ClampedArray(nbPixel * 4);

function convertUInt8ArrayToPNG(uint8Array) {
  

  // Create an ImageData object from the UInt8Array
  // const imageData = new ImageData(uint8Array, tileSize, tileSize);

  imageData.data.set(uint8Array);

  // Put the image data onto the canvas
  ctx.putImageData(imageData, 0, 0);

  // Convert the canvas to a data URL representing a PNG image
  const dataURL = canvas.toDataURL('image/png');

  return dataURL;
}





function unitToLat(unit) {
  const pi = Math.PI;
  const atan = Math.atan;
  const exp = Math.exp;

  const thing1 = exp(unit * 2 * pi);
  const thing2 = atan(thing1) - pi / 4;
  return (thing2 * 360) / pi;
}

function pixelToLonLat(xInternal, yInternal, x, y, z, tileSize) {
  const nbTilePerAxis = 2 ** z;
  const mercUnitX = (1 / nbTilePerAxis) * (x + (xInternal / tileSize));
  const mercUnitY = (1 / nbTilePerAxis) * (y + (yInternal / tileSize));
  const lon = mercUnitX * 360 - 180;
  const lat = unitToLat((1 - mercUnitY - 0.5))
  return [lon, lat];
}


maptilersdk.config.apiKey = 'bod4IIn9bwK8mnZIk49v';
      
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.BACKDROP,
  hash: true,
  maxPitch: 85,
  // terrain: true,
});

// map.showTileBoundaries = true;


async function generateTilePixel(tileX, tileY, tileZ) {
  return new Promise((resolve) => {
    const k = 1.5;
    const degreeMargin = 6;

    for (let i = 0; i < nbPixel * 4; i += 4) {
      const xInternal = (i / 4) % tileSize;
      const yInternal = ~~((i / 4) / tileSize);
      
      const [lon, lat] = pixelToLonLat(xInternal, yInternal, tileX, tileY, tileZ, tileSize) 
      const { altitude } = SunCalc.getPosition(now, lat, lon);
      const altitudeDeg = altitude * 180 / Math.PI;
      

      const degreesBelowHorizon = -altitudeDeg;
      
      tilePixels[i + 3] = 180 * ( 1 / (1 + Math.exp(-k * (degreesBelowHorizon - (degreeMargin/2) )))   )
  
      // dark blue
      tilePixels[i] = 0;
      tilePixels[i + 1] = 0;
      tilePixels[i + 2] = 17;
    }
  
    imageData.data.set(tilePixels);
  
    // Put the image data onto the canvas
    ctx.putImageData(imageData, 0, 0);

    canvas.convertToBlob()
    .then((blob) => {
      return blob.arrayBuffer()
    })
    .then((buff) => {
      resolve(buff)
    })


  })
}




maptilersdk.addProtocol('custom_protocol', (params, callback) => {
  
  const [z, x, y] = params.url.split("/").pop().split("-").map(el => parseFloat(el));
 
  generateTilePixel(x, y, z)
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

