importScripts("suncalc-timestamp.js")

const tileSize = 512;
const nbPixel = tileSize * tileSize;
const now = +(new Date());
const canvas = new OffscreenCanvas(tileSize, tileSize);
const ctx = canvas.getContext('2d');
const imageData = new ImageData(tileSize, tileSize);
const tilePixels = new Uint8ClampedArray(nbPixel * 4);


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


self.onmessage = async (evt) => {
  const {x, y, z} = evt.data;
  const tileBuffer = await generateTilePixel(x, y, z);
  postMessage(tileBuffer, [tileBuffer])
};