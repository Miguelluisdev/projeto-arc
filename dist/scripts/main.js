// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l1XHo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var _personagensJs = require("./personagens.js");
// game
const sortear = document.getElementById("sortear");
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const telaAposta = document.getElementById("telaAposta");
const thirdScreen = document.getElementById("thirdScreen");
let oponente = document.getElementById("oponente");
let profileOponent = document.getElementById("imagemOponente");
let profileOponent2 = document.getElementById("imagemOponente2");
let nomeOponent = document.getElementById("nomeOponente");
let nomeOponentRes = document.getElementById("nomeOponenteRes");
const jinxed = document.getElementById("jinx");
const apostaRandom = document.getElementById("apostaRandom");
const apostaDefault = document.getElementById("apostaDefault");
let forcaOponente = document.getElementById("forcaOponente");
let agilidadeOponente = document.getElementById("agilidadeOponente");
let resistenciaOponente = document.getElementById("resistenciaOponente");
let forcaJinx = document.getElementById("forcaJinx");
let agilidadeJinx = document.getElementById("agilidadeJinx");
let resjinx = document.getElementById("ResJinx");
const resultado = document.getElementById("resultado");
const restart = document.getElementById("restart");
sortear.addEventListener("click", async ()=>{
    firstScreen.style.display = "none";
    secondScreen.style.display = "flex";
    const personaRandom = Math.floor(Math.random() * (0, _personagensJs.personagem).length);
    const oponentRandom = (0, _personagensJs.personagem)[personaRandom];
    setTimeout(()=>{
        secondScreen.style.display = "none";
        telaAposta.style.display = "flex";
        profileOponent.setAttribute("src", oponentRandom.profile);
        nomeOponent.textContent = oponentRandom.nome;
        apostaDefault.addEventListener("click", async ()=>{
            await comparacao((0, _personagensJs.JinxPlay), oponentRandom);
            telaAposta.style.display = "none";
            thirdScreen.style.display = "flex";
            forcaOponente.innerText = oponentRandom.forca;
            agilidadeOponente.innerText = oponentRandom.agilidade;
            resistenciaOponente.innerText = oponentRandom.resistencia;
            nomeOponentRes.innerText = oponentRandom.nome;
            profileOponent2.setAttribute("src", oponentRandom.profile);
            forcaJinx.innerText = (0, _personagensJs.JinxPlay).forca;
            agilidadeJinx.innerText = (0, _personagensJs.JinxPlay).agilidade;
            resjinx.innerText = (0, _personagensJs.JinxPlay).resistencia;
        });
        apostaRandom.addEventListener("click", async ()=>{
            await comparacao((0, _personagensJs.JinxPlay), oponentRandom);
            telaAposta.style.display = "none";
            thirdScreen.style.display = "flex";
            forcaOponente.innerText = oponentRandom.forca;
            agilidadeOponente.innerText = oponentRandom.agilidade;
            resistenciaOponente.innerText = oponentRandom.resistencia;
            nomeOponentRes.innerText = oponentRandom.nome;
            profileOponent2.setAttribute("src", oponentRandom.profile);
            forcaJinx.innerText = (0, _personagensJs.JinxPlay).forca;
            agilidadeJinx.innerText = (0, _personagensJs.JinxPlay).agilidade;
            resjinx.innerText = (0, _personagensJs.JinxPlay).resistencia;
        });
    }, 3000);
});
async function comparacao(personagemApostado, personagem2) {
    return new Promise((resolve)=>{
        let score1 = 0;
        let score2 = 0;
        if (personagemApostado.forca > personagem2.forca) {
            score1++;
            console.log("+1 forca");
        } else if (personagem2.forca > personagemApostado.forca) score2++;
        if (personagemApostado.agilidade > personagem2.agilidade) {
            score1++;
            console.log("+1 agi");
        } else if (personagem2.agilidade < personagemApostado.agilidade) score2++;
        if (personagemApostado.resistencia > personagem2.resistencia) {
            score1++;
            console.log("+1 res");
        } else if (personagem2.resistencia < personagemApostado.resistencia) score2++;
        if (score1 > score2) resultado.innerHTML = "Voc\xea Ganhou!!!!!!";
        else resultado.innerHTML = "Voc\xea Perdeu!!!!!!";
        resolve();
    });
}
restart.addEventListener("click", ()=>{
    thirdScreen.style.display = "none";
    firstScreen.style.display = "flex";
});
// scroll top
const scrollToTopButton = document.querySelector(".scrollTop");
const rootElement = document.documentElement;
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("scroll", ()=>{
    if (rootElement.scrollTop > 100) scrollToTopButton.classList.add("show");
    else scrollToTopButton.classList.remove("show");
});
scrollToTopButton.addEventListener("click", scrollToTop);
// slider 
const slider = document.querySelector(".slider");
let count = 0;
function slideImage() {
    count++;
    if (count > 4) count = 0;
    const offset = -count * 50;
    slider.style.transform = `translateX(${offset}%)`;
}
setInterval(slideImage, 5000);
// painel
const paineis = document.querySelectorAll(".painel");
paineis.forEach((painel)=>{
    painel.addEventListener("click", ()=>{
        removeActiveClasses();
        painel.classList.add("active");
    });
});
function removeActiveClasses() {
    paineis.forEach((painel)=>{
        painel.classList.remove("active");
    });
}

},{"./personagens.js":"5P2Pz"}],"5P2Pz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "personagem", ()=>personagem);
parcelHelpers.export(exports, "JinxPlay", ()=>JinxPlay);
const JinxPlay = {
    nome: "Jinx",
    forca: Math.floor(Math.random() * 95 + 25),
    agilidade: Math.floor(Math.random() * 100 + 25),
    resistencia: Math.floor(Math.random() * 85 + 25),
    profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172230399959781457/jinx-game2.png?ex=655f8fa2&is=654d1aa2&hm=7d8728893710d800490a7b657e63be819b77117f0637a2cab7006d43c1d97159&"
};
const personagem = [
    {
        nome: "Vi",
        forca: Math.floor(Math.random() * 95 + 10),
        agilidade: Math.floor(Math.random() * 85 + 10),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172237451880833104/vi-arcane.png?ex=655f9633&is=654d2133&hm=9b8e0761143f3a0905b1f1fc1b805f2083b918582cdc66b3c6d518898264e4ab&"
    },
    {
        nome: "Jayce",
        forca: Math.floor(Math.random() * 90 + 10),
        agilidade: Math.floor(Math.random() * 85 + 10),
        resistencia: Math.floor(Math.random() * 85 + 25),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172238817969832058/jayce.png?ex=655f9779&is=654d2279&hm=2c39dec43f7b5b2209a846c8ef594c9e41c0bc4c02e309a52f8cdda38f241a17&"
    },
    {
        nome: "Ekko",
        forca: Math.floor(Math.random() * 90 + 10),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 90 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172243211947888640/ekko_png.png?ex=655f9b90&is=654d2690&hm=ff264d24cba5e511fb19b8f68c30637f45554fe58ea9543f7abf3d4dc01668c4&"
    },
    {
        nome: "Singed",
        forca: Math.floor(Math.random() * 70 + 10),
        agilidade: Math.floor(Math.random() * 90 + 25),
        resistencia: Math.floor(Math.random() * 80 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610513641947206/singed-game.png?ex=6560f1a4&is=654e7ca4&hm=c79a9ee02064ba6f072c97852c11671e797ad5b10ac1855a11a40ca1240b2ae1&"
    },
    {
        nome: "Vander",
        forca: Math.floor(Math.random() * 100 + 10),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 90 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610514002661466/vander.png?ex=6560f1a4&is=654e7ca4&hm=38418c7af8f56e22da7196839fd8d193ad061570609c333ca0dc61c6f725d149&"
    },
    {
        nome: "Silco",
        forca: Math.floor(Math.random() * 70 + 10),
        agilidade: Math.floor(Math.random() * 80 + 25),
        resistencia: Math.floor(Math.random() * 60 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610843951779850/silco.png?ex=6560f1f3&is=654e7cf3&hm=1c8837c66a65717d86eab6c3337dd30fc32f8387d149f0531a7db19003f6b8ab&"
    },
    {
        nome: "Heimmerdinger",
        forca: Math.floor(Math.random() * 60 + 10),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 90 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610513369313361/heimer.png?ex=6560f1a4&is=654e7ca4&hm=41c5a0c3b2db83e761db5da3deda67ded43a5a467b20bf4ebc20ce96729f1c15&"
    },
    {
        nome: "Caitlyn",
        forca: Math.floor(Math.random() * 60 + 10),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 70 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610710497398814/cait.png?ex=6560f1d3&is=654e7cd3&hm=cfe0b5e9e1ae3a164594013a3e5d46ccbe268655e0ff606c8d4ffc04e3037c3f&"
    },
    {
        nome: "viktor",
        forca: Math.floor(Math.random() * 60 + 10),
        agilidade: Math.floor(Math.random() * 60 + 25),
        resistencia: Math.floor(Math.random() * 60 + 10),
        profile: "https://cdn.discordapp.com/attachments/1151211352958959826/1172610512970862692/viktor.png?ex=6560f1a4&is=654e7ca4&hm=fc57692544ce1afbdb03ab4ca943e1240752911799611d04dede3d6cb226c168&"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["l1XHo","3cYfC"], "3cYfC", "parcelRequire933b")

//# sourceMappingURL=main.js.map
