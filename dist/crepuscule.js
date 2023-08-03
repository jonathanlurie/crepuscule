var u = Object.defineProperty;
var L = (o, t, i) => t in o ? u(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var s = (o, t, i) => (L(o, typeof t != "symbol" ? t + "" : t, i), i);
import { addProtocol as b } from "@maptiler/sdk";
const a = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiOyhmdW5jdGlvbigpe3ZhciBoPU1hdGguUEksaT1NYXRoLnNpbixhPU1hdGguY29zLG09TWF0aC50YW4seD1NYXRoLmFzaW4sTT1NYXRoLmF0YW4yLEQ9TWF0aC5hY29zLHM9aC8xODAsSD0xZTMqNjAqNjAqMjQsVT0yNDQwNTg4LHA9MjQ1MTU0NTtmdW5jdGlvbiAkKHQpe3JldHVybiB0L0gtLjUrVX1mdW5jdGlvbiBBKHQpe3JldHVybiBuZXcgRGF0ZSgodCsuNS1VKSpIKX1mdW5jdGlvbiBrKHQpe3JldHVybiAkKHQpLXB9dmFyIEI9cyoyMy40Mzk3O2Z1bmN0aW9uIHkodCxuKXtyZXR1cm4gTShpKHQpKmEoQiktbShuKSppKEIpLGEodCkpfWZ1bmN0aW9uIEUodCxuKXtyZXR1cm4geChpKG4pKmEoQikrYShuKSppKEIpKmkodCkpfWZ1bmN0aW9uIEYodCxuLGUpe3JldHVybiBNKGkodCksYSh0KSppKG4pLW0oZSkqYShuKSl9ZnVuY3Rpb24gUSh0LG4sZSl7cmV0dXJuIHgoaShuKSppKGUpK2EobikqYShlKSphKHQpKX1mdW5jdGlvbiBSKHQsbil7cmV0dXJuIHMqKDI4MC4xNiszNjAuOTg1NjIzNSp0KS1ufWZ1bmN0aW9uIHcodCl7cmV0dXJuIHQ8MCYmKHQ9MCksMjk2N2UtNy9NYXRoLnRhbih0Ky4wMDMxMjUzNi8odCsuMDg5MDExNzkpKX1mdW5jdGlvbiBvKHQpe3JldHVybiBzKigzNTcuNTI5MSsuOTg1NjAwMjgqdCl9ZnVuY3Rpb24gaih0KXt2YXIgbj1zKigxLjkxNDgqaSh0KSsuMDIqaSgyKnQpKzNlLTQqaSgzKnQpKSxlPXMqMTAyLjkzNzI7cmV0dXJuIHQrbitlK2h9ZnVuY3Rpb24gcSh0KXt2YXIgbj1vKHQpLGU9aihuKTtyZXR1cm57ZGVjOkUoZSwwKSxyYTp5KGUsMCl9fXZhciBmPXt9O2YuZ2V0UG9zaXRpb249ZnVuY3Rpb24odCxuLGUpe3ZhciB1PXMqLWUscj1zKm4sbD1rKHQpLGM9cShsKSxkPVIobCx1KS1jLnJhO3JldHVybnthemltdXRoOkYoZCxyLGMuZGVjKSxhbHRpdHVkZTpRKGQscixjLmRlYyl9fTt2YXIgRz1mLnRpbWVzPVtbLS44MzMsInN1bnJpc2UiLCJzdW5zZXQiXSxbLS4zLCJzdW5yaXNlRW5kIiwic3Vuc2V0U3RhcnQiXSxbLTYsImRhd24iLCJkdXNrIl0sWy0xMiwibmF1dGljYWxEYXduIiwibmF1dGljYWxEdXNrIl0sWy0xOCwibmlnaHRFbmQiLCJuaWdodCJdLFs2LCJnb2xkZW5Ib3VyRW5kIiwiZ29sZGVuSG91ciJdXTtmLmFkZFRpbWU9ZnVuY3Rpb24odCxuLGUpe0cucHVzaChbdCxuLGVdKX07dmFyIFY9OWUtNDtmdW5jdGlvbiBLKHQsbil7cmV0dXJuIE1hdGgucm91bmQodC1WLW4vKDIqaCkpfWZ1bmN0aW9uIFcodCxuLGUpe3JldHVybiBWKyh0K24pLygyKmgpK2V9ZnVuY3Rpb24gWih0LG4sZSl7cmV0dXJuIHArdCsuMDA1MyppKG4pLS4wMDY5KmkoMiplKX1mdW5jdGlvbiBpdCh0LG4sZSl7cmV0dXJuIEQoKGkodCktaShuKSppKGUpKS8oYShuKSphKGUpKSl9ZnVuY3Rpb24gYXQodCl7cmV0dXJuLTIuMDc2Kk1hdGguc3FydCh0KS82MH1mdW5jdGlvbiBydCh0LG4sZSx1LHIsbCxjKXt2YXIgZD1pdCh0LGUsdSksZz1XKGQsbixyKTtyZXR1cm4gWihnLGwsYyl9Zi5nZXRUaW1lcz1mdW5jdGlvbih0LG4sZSx1KXt1PXV8fDA7dmFyIHI9cyotZSxsPXMqbixjPWF0KHUpLGQ9ayh0KSxnPUsoZCxyKSxUPVcoMCxyLGcpLFM9byhUKSxDPWooUyksTD1FKEMsMCksej1aKFQsUyxDKSxJLE4sYixQLEosTyx2PXtzb2xhck5vb246QSh6KSxuYWRpcjpBKHotLjUpfTtmb3IoST0wLE49Ry5sZW5ndGg7STxOO0krPTEpYj1HW0ldLFA9KGJbMF0rYykqcyxKPXJ0KFAscixsLEwsZyxTLEMpLE89ei0oSi16KSx2W2JbMV1dPUEoTyksdltiWzJdXT1BKEopO3JldHVybiB2fTtmdW5jdGlvbiB0dCh0KXt2YXIgbj1zKigyMTguMzE2KzEzLjE3NjM5Nip0KSxlPXMqKDEzNC45NjMrMTMuMDY0OTkzKnQpLHU9cyooOTMuMjcyKzEzLjIyOTM1KnQpLHI9bitzKjYuMjg5KmkoZSksbD1zKjUuMTI4KmkodSksYz0zODUwMDEtMjA5MDUqYShlKTtyZXR1cm57cmE6eShyLGwpLGRlYzpFKHIsbCksZGlzdDpjfX1mLmdldE1vb25Qb3NpdGlvbj1mdW5jdGlvbih0LG4sZSl7dmFyIHU9cyotZSxyPXMqbixsPWsodCksYz10dChsKSxkPVIobCx1KS1jLnJhLGc9UShkLHIsYy5kZWMpLFQ9TShpKGQpLG0ocikqYShjLmRlYyktaShjLmRlYykqYShkKSk7cmV0dXJuIGc9Zyt3KGcpLHthemltdXRoOkYoZCxyLGMuZGVjKSxhbHRpdHVkZTpnLGRpc3RhbmNlOmMuZGlzdCxwYXJhbGxhY3RpY0FuZ2xlOlR9fSxmLmdldE1vb25JbGx1bWluYXRpb249ZnVuY3Rpb24odCl7dmFyIG49ayh0fHxuZXcgRGF0ZSgpLnZhbHVlT2YoKSksZT1xKG4pLHU9dHQobikscj0xNDk1OThlMyxsPUQoaShlLmRlYykqaSh1LmRlYykrYShlLmRlYykqYSh1LmRlYykqYShlLnJhLXUucmEpKSxjPU0ocippKGwpLHUuZGlzdC1yKmEobCkpLGQ9TShhKGUuZGVjKSppKGUucmEtdS5yYSksaShlLmRlYykqYSh1LmRlYyktYShlLmRlYykqaSh1LmRlYykqYShlLnJhLXUucmEpKTtyZXR1cm57ZnJhY3Rpb246KDErYShjKSkvMixwaGFzZTouNSsuNSpjKihkPDA/LTE6MSkvTWF0aC5QSSxhbmdsZTpkfX07ZnVuY3Rpb24gWCh0LG4pe3JldHVybiBuZXcgRGF0ZSh0K24qSC8yNCl9Zi5nZXRNb29uVGltZXM9ZnVuY3Rpb24odCxuLGUsdSl7dmFyIHI9bmV3IERhdGUodCk7dT9yLnNldFVUQ0hvdXJzKDAsMCwwLDApOnIuc2V0SG91cnMoMCwwLDAsMCk7Zm9yKHZhciBsPS4xMzMqcyxjPWYuZ2V0TW9vblBvc2l0aW9uKHIsbixlKS5hbHRpdHVkZS1sLGQsZyxULFMsQyxMLHosSSxOLGIsUCxKLE8sdj0xO3Y8PTI0JiYoZD1mLmdldE1vb25Qb3NpdGlvbihYKHIsdiksbixlKS5hbHRpdHVkZS1sLGc9Zi5nZXRNb29uUG9zaXRpb24oWChyLHYrMSksbixlKS5hbHRpdHVkZS1sLEM9KGMrZykvMi1kLEw9KGctYykvMix6PS1MLygyKkMpLEk9KEMqeitMKSp6K2QsTj1MKkwtNCpDKmQsYj0wLE4+PTAmJihPPU1hdGguc3FydChOKS8oTWF0aC5hYnMoQykqMiksUD16LU8sSj16K08sTWF0aC5hYnMoUCk8PTEmJmIrKyxNYXRoLmFicyhKKTw9MSYmYisrLFA8LTEmJihQPUopKSxiPT09MT9jPDA/VD12K1A6Uz12K1A6Yj09PTImJihUPXYrKEk8MD9KOlApLFM9disoSTwwP1A6SikpLCEoVCYmUykpO3YrPTIpYz1nO3ZhciBZPXt9O3JldHVybiBUJiYoWS5yaXNlPVgocixUKSksUyYmKFkuc2V0PVgocixTKSksIVQmJiFTJiYoWVtJPjA/ImFsd2F5c1VwIjoiYWx3YXlzRG93biJdPSEwKSxZfSx0eXBlb2YgZXhwb3J0cz09Im9iamVjdCImJnR5cGVvZiBtb2R1bGU8InUiP21vZHVsZS5leHBvcnRzPWY6dHlwZW9mIGRlZmluZT09ImZ1bmN0aW9uIiYmZGVmaW5lLmFtZD9kZWZpbmUoZik6c2VsZi5TdW5DYWxjPWZ9KSgpO2Z1bmN0aW9uIG50KGgpe2NvbnN0IGk9TWF0aC5QSSxhPU1hdGguYXRhbixtPU1hdGguZXhwLHg9bShoKjIqaSk7cmV0dXJuKGEoeCktaS80KSozNjAvaX1mdW5jdGlvbiBfKGgsaSxhLG0seCxNKXtjb25zdCBEPTIqKngscz0xL0QqKGEraC9NKSxIPTEvRCoobStpL00pLFU9cyozNjAtMTgwLHA9bnQoMS1ILS41KTtyZXR1cm5bVSxwXX1hc3luYyBmdW5jdGlvbiBldChoLGksYSxtLHgsTSl7cmV0dXJuIG5ldyBQcm9taXNlKEQ9Pntjb25zdCBVPTEuMzMzMzMzMzMzMzMzMzMzMyxwPX5+KDEyOC8yKSxBPVt7eDowLHk6MH0se3g6MCx5OjEyOC0xfSx7eDoxMjgtMSx5OjEyOC0xfSx7eDoxMjgtMSx5OjB9LHt4OnAseTpwfSx7eDpwLHk6MH0se3g6cCx5OjEyOC0xfSx7eDowLHk6cH0se3g6MTI4LTEseTpwfV0ubWFwKG89Pntjb25zdFtqLHFdPV8oby54LG8ueSxoLGksYSwxMjgpLHthbHRpdHVkZTpmfT1TdW5DYWxjLmdldFBvc2l0aW9uKG0scSxqKTtyZXR1cm4gZioxODAvTWF0aC5QSX0pLGs9QS5ldmVyeShvPT5vPjApLEI9QS5ldmVyeShvPT5vPC02KSx5PWt8fEI/MjoxMjgsRT15KnksRj1uZXcgT2Zmc2NyZWVuQ2FudmFzKHkseSksUT1GLmdldENvbnRleHQoIjJkIiksUj1uZXcgSW1hZ2VEYXRhKHkseSksdz1uZXcgVWludDhDbGFtcGVkQXJyYXkoRSo0KTtmb3IobGV0IG89MDtvPEUqNDtvKz00KXtjb25zdCBqPW8vNCV5LHE9fn4oby80L3kpLFtmLEddPV8oaixxLGgsaSxhLHkpLHthbHRpdHVkZTpWfT1TdW5DYWxjLmdldFBvc2l0aW9uKG0sRyxmKSxLPVYqMTgwL01hdGguUEksVz0tSztNP0s+PTA/d1tvKzNdPTA6SzwtNj93W28rM109MjU1OndbbyszXT0xMjg6d1tvKzNdPTI1NSooMS8oMStNYXRoLmV4cCgtVSooVy02LzIpKSkpLHdbb109eFswXSx3W28rMV09eFsxXSx3W28rMl09eFsyXX1SLmRhdGEuc2V0KHcpLFEucHV0SW1hZ2VEYXRhKFIsMCwwKSxGLmNvbnZlcnRUb0Jsb2IoKS50aGVuKG89Pm8uYXJyYXlCdWZmZXIoKSkudGhlbihvPT57RChvKX0pfSl9c2VsZi5vbm1lc3NhZ2U9YXN5bmMgaD0+e2NvbnN0e3g6aSx5OmEsejptLHRpbWVzdGFtcDp4LGNvbG9yOk0sZGVidWc6RH09aC5kYXRhLHM9YXdhaXQgZXQoaSxhLG0seCxNLEQpO3Bvc3RNZXNzYWdlKHMsW3NdKX19KSgpOwo=", S = typeof window < "u" && window.Blob && new Blob([atob(a)], { type: "text/javascript;charset=utf-8" });
function y() {
  let o;
  try {
    if (o = S && (window.URL || window.webkitURL).createObjectURL(S), !o)
      throw "";
    return new Worker(o);
  } catch {
    return new Worker("data:application/javascript;base64," + a);
  } finally {
    o && (window.URL || window.webkitURL).revokeObjectURL(o);
  }
}
const r = "crepuscule_protocole_<UNIQUE>", n = "crepuscule_source_<UNIQUE>", m = "crepuscule_layer_<UNIQUE>", K = {
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
    const d = {
      ...K,
      ...i
    };
    this.map = t, this.color = d.color.slice(), this.opacity = d.opacity, this.date = d.date, this.debug = d.debug, this.unique = (Math.random() + 1).toString(36).substring(2), this.protocolNamespace = r.replace("<UNIQUE>", this.unique), this.tileUriPattern = `${this.protocolNamespace}://{z}-{x}-{y}-${+this.date}`, this.layerId = m.replace("<UNIQUE>", this.unique), this.sourceId = n.replace("<UNIQUE>", this.unique);
  }
  async generateTilePixelOnWorker(t, i, d, l) {
    return new Promise((h) => {
      const p = new y();
      p.postMessage({ x: t, y: i, z: d, timestamp: l, color: this.color, debug: this.debug }), p.onmessage = (e) => {
        h(e.data);
      };
    });
  }
  init() {
    b(this.protocolNamespace, (t, i) => {
      if (!t.url)
        throw new Error("");
      const [d, l, h, p] = t.url.split("/").pop().split("-").map((e) => parseFloat(e));
      return this.generateTilePixelOnWorker(l, h, d, p).then((e) => {
        i(null, e, null, null);
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
class k {
  constructor(t, i = {}) {
    s(this, "opacity");
    s(this, "crA");
    s(this, "crB");
    s(this, "usingA");
    s(this, "intervalId");
    const d = {
      ...K,
      ...i
    };
    this.opacity = d.opacity, d.debug ? (this.crA = new c(t, { ...d, color: [70, 0, 0] }), this.crB = new c(t, { ...d, opacity: 0, color: [0, 0, 70] })) : (this.crA = new c(t, d), this.crB = new c(t, { ...d, opacity: 0 })), this.usingA = !0, this.intervalId = null;
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
  k as CrepusculeLive
};
