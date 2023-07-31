const CREPUSCULE_PROTOCOL_NAMESPACE_PATTERN = "crepuscule_protocole_<UNIQUE>";
const CREPUSCULE_SOURCE_ID_PATTERN = "crepuscule_source_<UNIQUE>";
const CREPUSCULE_LAYER_ID_PATTERN = "crepuscule_layer_<UNIQUE>";

const defaultOptions = {
  color: [0, 0, 17],
  opacity: 0.7,
  date: new Date(),
  debug: false,
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
    this.debug = optionsWithDefault.debug;
    
    this.unique = (Math.random() + 1).toString(36).substring(2);
    this.protocolNamespace = CREPUSCULE_PROTOCOL_NAMESPACE_PATTERN.replace("<UNIQUE>", this.unique);
    this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`
    this.layerId = CREPUSCULE_LAYER_ID_PATTERN.replace("<UNIQUE>", this.unique);
    this.sourceId = CREPUSCULE_SOURCE_ID_PATTERN.replace("<UNIQUE>", this.unique);
  }


  async generateTilePixelOnWorker(x, y, z, timestamp) {
    return new Promise((resolve) => {
      const tileWorker = new Worker("tileWorker.js");
      tileWorker.postMessage({x, y, z, timestamp, color: this.color, debug: this.debug});
    
      tileWorker.onmessage = (evt) => {
        resolve(evt.data)
      };
    })
  }


  init() {
    // Adding the protocole
    maptilersdk.addProtocol(this.protocolNamespace, (params, callback) => {
      const [z, x, y, timestamp] = params.url.split("/").pop().split("-").map(el => parseFloat(el));
      this.tilesToMake ++;
    
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
    this.opacity = o;
    this.map.setPaintProperty(this.layerId, "raster-opacity-transition", {duration: 0, delay: 0, ...options});
    this.map.setPaintProperty(this.layerId, "raster-opacity", o, {validate: false})
  }


  hide(options = {}) {
    this.setOpacity(0, options);
  }
  
  
  show(options = {}) {
    this.setOpacity(this.opacity, options);
  }


  setDate(date) {
    this.date = date;
    this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`;
    this.source.tiles[0] = this.tileUriPattern;
    this.source.load();
  }

}







class CrepusculeLive {
  constructor(map, options = {}) {
    const optionsWithDefault = {
      ... defaultOptions,
      ... options,
    };

    this.opacity = optionsWithDefault.opacity;

    if (optionsWithDefault.debug) {
      this.crA = new Crepuscule(map, {...optionsWithDefault, color: [70, 0, 0]});
      this.crB = new Crepuscule(map, {...optionsWithDefault, opacity: 0, color: [0, 0, 70]});
    } else {
      this.crA = new Crepuscule(map, optionsWithDefault);
      this.crB = new Crepuscule(map, {...optionsWithDefault, opacity: 0});
    }
    
    this.usingA = true;

    this.intervalId = null;
  }


  init() {
    this.crA.init();
    this.crB.init();

    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      this._update();
    }, 5000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }


  _update() {
    const toHide = this.usingA ? this.crA : this.crB;
    const toShow = this.usingA ? this.crB : this.crA;
    this.usingA = !this.usingA;

    toShow.setDate(new Date());

    // Wait some time to make sure the tiles are created
    toHide.setOpacity(0, {duration: 0, delay: 1000});
    toShow.setOpacity(this.opacity, {duration: 0, delay: 1000});
  }
}

// TODO: add the unmount
