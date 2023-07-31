const CREPUSCULE_PROTOCOL_NAMESPACE_PATTERN = "crepuscule_protocole_<UNIQUE>";
const CREPUSCULE_SOURCE_ID_PATTERN = "crepuscule_source_<UNIQUE>";
const CREPUSCULE_LAYER_ID_PATTERN = "crepuscule_layer_<UNIQUE>";

const defaultOptions = {
  color: [0, 0, 17],
  opacity: 0.7,
  date: new Date(),
}

class Crepuscule {
  constructor(map, options = {}) {
    const optionsWithDefault = {
      ... defaultOptions,
      ... options,
    };

    this.map = map;
    this.color = optionsWithDefault.color.slice();
    this.opacity = optionsWithDefault.opacity;
    this.date = optionsWithDefault.date;
    this.source = null; // Added at init()
    this.layer = null; // Added at init()
    this.tilesToMake = 0;
    
    this.unique = (Math.random() + 1).toString(36).substring(2);
    this.protocolNamespace = CREPUSCULE_PROTOCOL_NAMESPACE_PATTERN.replace("<UNIQUE>", this.unique);
    this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`
    this.layerId = CREPUSCULE_LAYER_ID_PATTERN.replace("<UNIQUE>", this.unique);
    this.sourceId = CREPUSCULE_SOURCE_ID_PATTERN.replace("<UNIQUE>", this.unique);
  }


  async generateTilePixelOnWorker(x, y, z, timestamp) {
    return new Promise((resolve) => {
      const tileWorker = new Worker("tileWorker.js");
      console.log("timestamp sent to worker:", timestamp);
      tileWorker.postMessage({x, y, z, timestamp, color: this.color});
    
      tileWorker.onmessage = (evt) => {
        console.log("refresh!");
        resolve(evt.data)
      };
    })
  }


  init() {
    // Adding the protocole
    maptilersdk.addProtocol(this.protocolNamespace, (params, callback) => {
      const [z, x, y, timestamp] = params.url.split("/").pop().split("-").map(el => parseFloat(el));
      this.tilesToMake ++;
    
      console.log("Requesting tile: ", x, y, z, timestamp);
    
      this.generateTilePixelOnWorker(x, y, z, timestamp)
      .then((arrbuff) => {
        callback(null, arrbuff, null, null);
        this.tilesToMake --;
        // if(onMadeATile) onMadeATile();
      })
      return { cancel: () => { } };
    });

    // Adding the source
    map.addSource(this.sourceId, {
      type: "raster",
        tiles: [this.tileUriPattern],
        tileSize: 512
    });
    this.source = map.getSource(this.sourceId);
  
    // adding the layer
    map.addLayer({
      id: this.layerId, 
      type: "raster",
      source: this.sourceId,
      paint: {
        "raster-opacity-transition": {duration: 1000, delay: 0},
        "raster-opacity": this.opacity,
      }
    })
    this.layer = map.getLayer(this.layerId);
  }


  setOpacity(o, options = {}) {

    this.map.setPaintProperty(this.layerId, "raster-opacity-transition", {duration: 0, delay: 0, ...options});
    this.map.setPaintProperty(this.layerId, "raster-opacity", o, {validate: false})
  }


  hide(options = {}) {
    this.setOpacity(0, options);
  }
  
  
  show(options = {}) {
    this.setOpacity(1, options);
  }


  setDate(date) {
    this.date = date;
    this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`;
    console.log("this.tileUriPattern ", this.tileUriPattern );
    this.source.tiles[0] = this.tileUriPattern;
    this.source.load();
  }

}







// class CrepusculeLive {
//   constructor(map, options = {}) {
//     const optionsWithDefault = {
//       ... defaultOptions,
//       ... options,
//     };

//     this.crA = new Crepuscule

//   }
// }