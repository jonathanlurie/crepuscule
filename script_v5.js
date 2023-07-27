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

const tileSize = 128;
const nbPixel = tileSize * tileSize;
const bordeaux = [-0.5788583921992965, 44.84925934913024];

const now = +(new Date());

function generateTilePixel(tileX, tileY, tileZ) {
  const tilePixels = new Uint8ClampedArray(nbPixel * 4);
  for (let i = 0; i < nbPixel * 4; i += 4) {
    const xInternal = (i / 4) % tileSize;
    const yInternal = ~~((i / 4) / tileSize);
    

    const [lon, lat] = pixelToLonLat(xInternal, yInternal, tileX, tileY, tileZ, tileSize) 

    const { altitude } = SunCalc.getPosition(now, lat, lon);

    const altitudeDeg = altitude * 180 / Math.PI;
    // console.log(altitudeDeg);

    const distanceToPOI = Math.sqrt(Math.pow(lon - bordeaux[0], 2) + Math.pow(lat - bordeaux[1], 2));

    const degreeMargin = 18;
    
    if (altitudeDeg > 0 && altitudeDeg < 180) {
      tilePixels[i + 3] = 0;
    } else if (altitudeDeg <= 0 && altitudeDeg > - degreeMargin) {
      // Twilight zone using a cubic function
      // 0: closer to day light
      // 1: closer to night
      // const twilightIntensity = (altitudeDeg / -degreeMargin)
      // tilePixels[i + 3] = 180 * (twilightIntensity < 0.5 ? 4 * twilightIntensity * twilightIntensity * twilightIntensity : 1 - Math.pow(-2 * twilightIntensity + 2, 3) / 2)

      // Using sigmoid (more realistic)
      const degreesBelowHorizon = -altitudeDeg;
      tilePixels[i + 3] = 20 + 160 * ( 1 / (1 + Math.exp(-0.5 * (degreesBelowHorizon - 9 )))   )
    } else {
      tilePixels[i + 3] = 180;
    }

    tilePixels[i] = 0;
    tilePixels[i + 1] = 0;
    tilePixels[i + 2] = 17;
    
  }

  return tilePixels;
}




maptilersdk.addProtocol('custom_protocol', (params, callback) => {
  
  const [z, x, y] = params.url.split("/").pop().split("-").map(el => parseFloat(el));
  // console.log("params", params, z, x, y);

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

