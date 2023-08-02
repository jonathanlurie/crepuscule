var y = Object.defineProperty;
var b = (e, t, i) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var s = (e, t, i) => (b(e, typeof t != "symbol" ? t + "" : t, i), i);
import { addProtocol as r } from "@maptiler/sdk";
const K = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiOyhmdW5jdGlvbigpe3ZhciBNPU1hdGguUEksYT1NYXRoLnNpbixyPU1hdGguY29zLHA9TWF0aC50YW4sbT1NYXRoLmFzaW4sZz1NYXRoLmF0YW4yLGI9TWF0aC5hY29zLGk9TS8xODAsQT0xZTMqNjAqNjAqMjQsYz0yNDQwNTg4LHo9MjQ1MTU0NTtmdW5jdGlvbiBOKHQpe3JldHVybiB0L0EtLjUrY31mdW5jdGlvbiBTKHQpe3JldHVybiBuZXcgRGF0ZSgodCsuNS1jKSpBKX1mdW5jdGlvbiBVKHQpe3JldHVybiBOKHQpLXp9dmFyIGs9aSoyMy40Mzk3O2Z1bmN0aW9uIEIodCxuKXtyZXR1cm4gZyhhKHQpKnIoayktcChuKSphKGspLHIodCkpfWZ1bmN0aW9uIHEodCxuKXtyZXR1cm4gbShhKG4pKnIoaykrcihuKSphKGspKmEodCkpfWZ1bmN0aW9uIEsodCxuLGUpe3JldHVybiBnKGEodCkscih0KSphKG4pLXAoZSkqcihuKSl9ZnVuY3Rpb24gUSh0LG4sZSl7cmV0dXJuIG0oYShuKSphKGUpK3IobikqcihlKSpyKHQpKX1mdW5jdGlvbiBWKHQsbil7cmV0dXJuIGkqKDI4MC4xNiszNjAuOTg1NjIzNSp0KS1ufWZ1bmN0aW9uIHN0KHQpe3JldHVybiB0PDAmJih0PTApLDI5NjdlLTcvTWF0aC50YW4odCsuMDAzMTI1MzYvKHQrLjA4OTAxMTc5KSl9ZnVuY3Rpb24gVyh0KXtyZXR1cm4gaSooMzU3LjUyOTErLjk4NTYwMDI4KnQpfWZ1bmN0aW9uIFoodCl7dmFyIG49aSooMS45MTQ4KmEodCkrLjAyKmEoMip0KSszZS00KmEoMyp0KSksZT1pKjEwMi45MzcyO3JldHVybiB0K24rZStNfWZ1bmN0aW9uIF8odCl7dmFyIG49Vyh0KSxlPVoobik7cmV0dXJue2RlYzpxKGUsMCkscmE6QihlLDApfX12YXIgaD17fTtoLmdldFBvc2l0aW9uPWZ1bmN0aW9uKHQsbixlKXt2YXIgdT1pKi1lLG89aSpuLGY9VSh0KSxzPV8oZiksZD1WKGYsdSktcy5yYTtyZXR1cm57YXppbXV0aDpLKGQsbyxzLmRlYyksYWx0aXR1ZGU6UShkLG8scy5kZWMpfX07dmFyIFI9aC50aW1lcz1bWy0uODMzLCJzdW5yaXNlIiwic3Vuc2V0Il0sWy0uMywic3VucmlzZUVuZCIsInN1bnNldFN0YXJ0Il0sWy02LCJkYXduIiwiZHVzayJdLFstMTIsIm5hdXRpY2FsRGF3biIsIm5hdXRpY2FsRHVzayJdLFstMTgsIm5pZ2h0RW5kIiwibmlnaHQiXSxbNiwiZ29sZGVuSG91ckVuZCIsImdvbGRlbkhvdXIiXV07aC5hZGRUaW1lPWZ1bmN0aW9uKHQsbixlKXtSLnB1c2goW3QsbixlXSl9O3ZhciAkPTllLTQ7ZnVuY3Rpb24gdXQodCxuKXtyZXR1cm4gTWF0aC5yb3VuZCh0LSQtbi8oMipNKSl9ZnVuY3Rpb24gdHQodCxuLGUpe3JldHVybiAkKyh0K24pLygyKk0pK2V9ZnVuY3Rpb24gbnQodCxuLGUpe3JldHVybiB6K3QrLjAwNTMqYShuKS0uMDA2OSphKDIqZSl9ZnVuY3Rpb24gY3QodCxuLGUpe3JldHVybiBiKChhKHQpLWEobikqYShlKSkvKHIobikqcihlKSkpfWZ1bmN0aW9uIGZ0KHQpe3JldHVybi0yLjA3NipNYXRoLnNxcnQodCkvNjB9ZnVuY3Rpb24gZHQodCxuLGUsdSxvLGYscyl7dmFyIGQ9Y3QodCxlLHUpLGw9dHQoZCxuLG8pO3JldHVybiBudChsLGYscyl9aC5nZXRUaW1lcz1mdW5jdGlvbih0LG4sZSx1KXt1PXV8fDA7dmFyIG89aSotZSxmPWkqbixzPWZ0KHUpLGQ9VSh0KSxsPXV0KGQsbyksdz10dCgwLG8sbCksUD1XKHcpLEM9WihQKSxIPXEoQywwKSx5PW50KHcsUCxDKSxJLEUsRCx4LEosaix2PXtzb2xhck5vb246Uyh5KSxuYWRpcjpTKHktLjUpfTtmb3IoST0wLEU9Ui5sZW5ndGg7STxFO0krPTEpRD1SW0ldLHg9KERbMF0rcykqaSxKPWR0KHgsbyxmLEgsbCxQLEMpLGo9eS0oSi15KSx2W0RbMV1dPVMoaiksdltEWzJdXT1TKEopO3JldHVybiB2fTtmdW5jdGlvbiBldCh0KXt2YXIgbj1pKigyMTguMzE2KzEzLjE3NjM5Nip0KSxlPWkqKDEzNC45NjMrMTMuMDY0OTkzKnQpLHU9aSooOTMuMjcyKzEzLjIyOTM1KnQpLG89bitpKjYuMjg5KmEoZSksZj1pKjUuMTI4KmEodSkscz0zODUwMDEtMjA5MDUqcihlKTtyZXR1cm57cmE6QihvLGYpLGRlYzpxKG8sZiksZGlzdDpzfX1oLmdldE1vb25Qb3NpdGlvbj1mdW5jdGlvbih0LG4sZSl7dmFyIHU9aSotZSxvPWkqbixmPVUodCkscz1ldChmKSxkPVYoZix1KS1zLnJhLGw9UShkLG8scy5kZWMpLHc9ZyhhKGQpLHAobykqcihzLmRlYyktYShzLmRlYykqcihkKSk7cmV0dXJuIGw9bCtzdChsKSx7YXppbXV0aDpLKGQsbyxzLmRlYyksYWx0aXR1ZGU6bCxkaXN0YW5jZTpzLmRpc3QscGFyYWxsYWN0aWNBbmdsZTp3fX0saC5nZXRNb29uSWxsdW1pbmF0aW9uPWZ1bmN0aW9uKHQpe3ZhciBuPVUodHx8bmV3IERhdGUoKS52YWx1ZU9mKCkpLGU9XyhuKSx1PWV0KG4pLG89MTQ5NTk4ZTMsZj1iKGEoZS5kZWMpKmEodS5kZWMpK3IoZS5kZWMpKnIodS5kZWMpKnIoZS5yYS11LnJhKSkscz1nKG8qYShmKSx1LmRpc3QtbypyKGYpKSxkPWcocihlLmRlYykqYShlLnJhLXUucmEpLGEoZS5kZWMpKnIodS5kZWMpLXIoZS5kZWMpKmEodS5kZWMpKnIoZS5yYS11LnJhKSk7cmV0dXJue2ZyYWN0aW9uOigxK3IocykpLzIscGhhc2U6LjUrLjUqcyooZDwwPy0xOjEpL01hdGguUEksYW5nbGU6ZH19O2Z1bmN0aW9uIE8odCxuKXtyZXR1cm4gbmV3IERhdGUodCtuKkEvMjQpfWguZ2V0TW9vblRpbWVzPWZ1bmN0aW9uKHQsbixlLHUpe3ZhciBvPW5ldyBEYXRlKHQpO3U/by5zZXRVVENIb3VycygwLDAsMCwwKTpvLnNldEhvdXJzKDAsMCwwLDApO2Zvcih2YXIgZj0uMTMzKmkscz1oLmdldE1vb25Qb3NpdGlvbihvLG4sZSkuYWx0aXR1ZGUtZixkLGwsdyxQLEMsSCx5LEksRSxELHgsSixqLHY9MTt2PD0yNCYmKGQ9aC5nZXRNb29uUG9zaXRpb24oTyhvLHYpLG4sZSkuYWx0aXR1ZGUtZixsPWguZ2V0TW9vblBvc2l0aW9uKE8obyx2KzEpLG4sZSkuYWx0aXR1ZGUtZixDPShzK2wpLzItZCxIPShsLXMpLzIseT0tSC8oMipDKSxJPShDKnkrSCkqeStkLEU9SCpILTQqQypkLEQ9MCxFPj0wJiYoaj1NYXRoLnNxcnQoRSkvKE1hdGguYWJzKEMpKjIpLHg9eS1qLEo9eStqLE1hdGguYWJzKHgpPD0xJiZEKyssTWF0aC5hYnMoSik8PTEmJkQrKyx4PC0xJiYoeD1KKSksRD09PTE/czwwP3c9dit4OlA9dit4OkQ9PT0yJiYodz12KyhJPDA/Sjp4KSxQPXYrKEk8MD94OkopKSwhKHcmJlApKTt2Kz0yKXM9bDt2YXIgRj17fTtyZXR1cm4gdyYmKEYucmlzZT1PKG8sdykpLFAmJihGLnNldD1PKG8sUCkpLCF3JiYhUCYmKEZbST4wPyJhbHdheXNVcCI6ImFsd2F5c0Rvd24iXT0hMCksRn0sdHlwZW9mIGV4cG9ydHM9PSJvYmplY3QiJiZ0eXBlb2YgbW9kdWxlPCJ1Ij9tb2R1bGUuZXhwb3J0cz1oOnR5cGVvZiBkZWZpbmU9PSJmdW5jdGlvbiImJmRlZmluZS5hbWQ/ZGVmaW5lKGgpOnNlbGYuU3VuQ2FsYz1ofSkoKTtjb25zdCBUPTUxMixYPVQqVCxZPW5ldyBPZmZzY3JlZW5DYW52YXMoVCxUKSxhdD1ZLmdldENvbnRleHQoIjJkIiksRz1uZXcgSW1hZ2VEYXRhKFQsVCksTD1uZXcgVWludDhDbGFtcGVkQXJyYXkoWCo0KTtmdW5jdGlvbiBydChNKXtjb25zdCBhPU1hdGguUEkscj1NYXRoLmF0YW4scD1NYXRoLmV4cCxtPXAoTSoyKmEpO3JldHVybihyKG0pLWEvNCkqMzYwL2F9ZnVuY3Rpb24gb3QoTSxhLHIscCxtLGcpe2NvbnN0IGI9MioqbSxpPTEvYioocitNL2cpLEE9MS9iKihwK2EvZyksYz1pKjM2MC0xODAsej1ydCgxLUEtLjUpO3JldHVybltjLHpdfWFzeW5jIGZ1bmN0aW9uIGl0KE0sYSxyLHAsbSxnKXtyZXR1cm4gbmV3IFByb21pc2UoYj0+e2NvbnN0IEE9MS4zMzMzMzMzMzMzMzMzMzMzO2ZvcihsZXQgYz0wO2M8WCo0O2MrPTQpe2NvbnN0IHo9Yy80JVQsTj1+fihjLzQvVCksW1MsVV09b3QoeixOLE0sYSxyLFQpLHthbHRpdHVkZTprfT1TdW5DYWxjLmdldFBvc2l0aW9uKHAsVSxTKSxCPWsqMTgwL01hdGguUEkscT0tQjtnP0I+PTA/TFtjKzNdPTA6QjwtNj9MW2MrM109MjU1OkxbYyszXT0xMjg6TFtjKzNdPTI1NSooMS8oMStNYXRoLmV4cCgtQSoocS02LzIpKSkpLExbY109bVswXSxMW2MrMV09bVsxXSxMW2MrMl09bVsyXX1HLmRhdGEuc2V0KEwpLGF0LnB1dEltYWdlRGF0YShHLDAsMCksWS5jb252ZXJ0VG9CbG9iKCkudGhlbihjPT5jLmFycmF5QnVmZmVyKCkpLnRoZW4oYz0+e2IoYyl9KX0pfXNlbGYub25tZXNzYWdlPWFzeW5jIE09Pntjb25zdHt4OmEseTpyLHo6cCx0aW1lc3RhbXA6bSxjb2xvcjpnLGRlYnVnOmJ9PU0uZGF0YSxpPWF3YWl0IGl0KGEscixwLG0sZyxiKTtwb3N0TWVzc2FnZShpLFtpXSl9fSkoKTsK", h = typeof window < "u" && window.Blob && new Blob([atob(K)], { type: "text/javascript;charset=utf-8" });
function L() {
  let e;
  try {
    if (e = h && (window.URL || window.webkitURL).createObjectURL(h), !e)
      throw "";
    return new Worker(e);
  } catch {
    return new Worker("data:application/javascript;base64," + K);
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const S = "crepuscule_protocole_<UNIQUE>", n = "crepuscule_source_<UNIQUE>", W = "crepuscule_layer_<UNIQUE>", u = {
  color: [0, 0, 17],
  opacity: 0.7,
  date: /* @__PURE__ */ new Date(),
  debug: !1
};
class c {
  constructor(t, i = {}) {
    s(this, "map");
    s(this, "color");
    s(this, "opacity");
    s(this, "date");
    s(this, "unique");
    s(this, "protocolNamespace");
    s(this, "tileUriPattern");
    s(this, "layerId");
    s(this, "sourceId");
    s(this, "debug");
    s(this, "source");
    const o = {
      ...u,
      ...i
    };
    this.map = t, this.color = o.color.slice(), this.opacity = o.opacity, this.date = o.date, this.debug = o.debug, this.unique = (Math.random() + 1).toString(36).substring(2), this.protocolNamespace = S.replace("<UNIQUE>", this.unique), this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`, this.layerId = W.replace("<UNIQUE>", this.unique), this.sourceId = n.replace("<UNIQUE>", this.unique);
  }
  async generateTilePixelOnWorker(t, i, o, l) {
    return new Promise((a) => {
      const d = new L();
      d.postMessage({ x: t, y: i, z: o, timestamp: l, color: this.color, debug: this.debug }), d.onmessage = (p) => {
        a(p.data);
      };
    });
  }
  init() {
    r(this.protocolNamespace, (t, i) => {
      if (!t.url)
        throw new Error("");
      const [o, l, a, d] = t.url.split("/").pop().split("-").map((p) => parseFloat(p));
      return this.generateTilePixelOnWorker(l, a, o, d).then((p) => {
        i(null, p, null, null);
      }), { cancel: () => {
      } };
    }), this.map.addSource(this.sourceId, {
      type: "raster",
      tiles: [this.tileUriPattern],
      tileSize: 512
    }), this.source = this.map.getSource(this.sourceId), this.map.addLayer({
      id: this.layerId,
      type: "raster",
      source: this.sourceId,
      paint: {
        // @ts-ignore
        "raster-opacity-transition": { duration: 1e3, delay: 0 },
        "raster-opacity": this.opacity
      }
    });
  }
  setOpacity(t, i = {}) {
    this.opacity = t, this.map.setPaintProperty(this.layerId, "raster-opacity-transition", { duration: 0, delay: 0, ...i }), this.map.setPaintProperty(this.layerId, "raster-opacity", t, { validate: !1 });
  }
  hide(t = {}) {
    this.setOpacity(0, t);
  }
  show(t = {}) {
    this.setOpacity(this.opacity, t);
  }
  setDate(t) {
    this.date = t, this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`, this.source.tiles[0] = this.tileUriPattern, this.source.load();
  }
}
class G {
  constructor(t, i = {}) {
    s(this, "opacity");
    s(this, "crA");
    s(this, "crB");
    s(this, "usingA");
    s(this, "intervalId");
    const o = {
      ...u,
      ...i
    };
    this.opacity = o.opacity, o.debug ? (this.crA = new c(t, { ...o, color: [70, 0, 0] }), this.crB = new c(t, { ...o, opacity: 0, color: [0, 0, 70] })) : (this.crA = new c(t, o), this.crB = new c(t, { ...o, opacity: 0 })), this.usingA = !0, this.intervalId = null;
  }
  init() {
    this.crA.init(), this.crB.init(), this.start();
  }
  start() {
    this.intervalId = setInterval(() => {
      this._update();
    }, 5e3);
  }
  stop() {
    clearInterval(this.intervalId), this.intervalId = null;
  }
  _update() {
    const t = this.usingA ? this.crA : this.crB, i = this.usingA ? this.crB : this.crA;
    this.usingA = !this.usingA, i.setDate(/* @__PURE__ */ new Date()), t.setOpacity(0, { duration: 0, delay: 1e3 }), i.setOpacity(this.opacity, { duration: 0, delay: 1e3 });
  }
}
export {
  c as Crepuscule,
  G as CrepusculeLive
};
