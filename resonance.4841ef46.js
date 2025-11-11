// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"huHYX":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1d23b73e4841ef46";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3Aj1C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _resetCss = require("../styles/reset.css");
var _baseCss = require("../styles/base.css");
var _indexJs = require("../components/common/index.js");
var _routerJs = require("./router.js");
var _mobileNavJs = require("./mobile-nav.js");
var _mobileNavJsDefault = parcelHelpers.interopDefault(_mobileNavJs);
var _disableDemoLinksJs = require("./disable-demo-links.js");
const app = document.getElementById("app");
app.innerHTML = `
  <div class="wrapper">                                                                            
    ${(0, _indexJs.Header)()}
    <main class="main"></main>                                                                    
    ${(0, _indexJs.Footer)()}
  </div>
`;
(0, _mobileNavJsDefault.default)();
(0, _routerJs.router)();
(0, _disableDemoLinksJs.disableDemoLinks)();

},{"../styles/reset.css":"he3wz","../styles/base.css":"dNpVC","../components/common/index.js":"4x6tH","./router.js":"8Mwkg","./mobile-nav.js":"2IMOB","./disable-demo-links.js":"3j7oW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"he3wz":[function() {},{}],"dNpVC":[function() {},{}],"4x6tH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>(0, _headerJs.Header));
parcelHelpers.export(exports, "Footer", ()=>(0, _footerJs.Footer));
var _headerJs = require("./Header/Header.js");
var _footerJs = require("./Footer/Footer.js");

},{"./Header/Header.js":"11VV1","./Footer/Footer.js":"3kdU0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"11VV1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
var _headerCss = require("./Header.css");
var _headerResponsiveCss = require("./HeaderResponsive.css");
const logoUrl = new URL(require("7212ddc44c1881ec")).href;
function Header() {
    return `
    <header class="header">
      <div class="container">
        <nav class="nav">

	  			<a href="#/" class="logo">
            <img src="${logoUrl}" alt="Logo" />
          </a>

	  			<ul class="nav__list">
	    			<li><a href="#/" class="nav_link">Home</a></li>
	    			<li><a href="#/tech-specs" class="nav_link">Tech Specs</a></li>
	    			<li><a href="#/compare" class="nav_link">Compare</a></li>
          </ul>

	  			<div class="nav__icon">                                                                  
	    			<button class="mobile-nav-btn">
	      			<div class="nav-icon"></div>
	    			</button>
	  			</div>

        </nav>
      </div>
    </header>

    <div class="mobile-nav">                                                                        
      <ul class="mobile-nav__list">
        <li><a href="#/">Home</a></li>
				<li><a href="#/tech-specs">Tech Specs</a></li>
				<li><a href="#/compare">Compare</a></li>
      </ul>
    </div>
  `;
}

},{"./Header.css":"6zgpe","./HeaderResponsive.css":"3p9Du","7212ddc44c1881ec":"6rHkS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6zgpe":[function() {},{}],"3p9Du":[function() {},{}],"6rHkS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("logo.b984241e.png") + "?" + Date.now();

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"3kdU0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
var _footerCss = require("./Footer.css");
var _footerResponsiveCss = require("./FooterResponsive.css");
const logoUrl = new URL(require("e8d6a87b968add5e")).href;
const discordUrl = new URL(require("e2860e9f424a8a9")).href;
const metaUrl = new URL(require("ae50f0b51621b892")).href;
const xUrl = new URL(require("32c68228132c3a9b")).href;
function Footer() {
    return `
    <footer class="footer">
      <div class="container">
        <p class="footer_title">Sound. Presence. Purpose.</p>
				<p class="footer_text">
					Focused on crafting immersive audio experiences.<br />
					We believe sound should not just be heard\u{2014}it should move you.
				</p>
				<div class="footer_buttons">
					<a href="#!" class="footer_btn">Aura Pro II</a>
					<a href="#!" class="footer_btn">Flow II</a>
				</div>
				<div class="footer_sub">
					<a href="#/" class="footer_logo">
						<img src="${logoUrl}" alt="Logo" />
					</a>
					<div class="sicial_block">
						<p class="copyright">\xa9 2025 Resonance. All rights reserved.</p>
						<div class="footer_socials">
							<a href="#!">
								<img src="${discordUrl}" alt="Discord" />
							</a>
							<a href="#!">
								<img src="${xUrl}" alt="X" />
							</a>
							<a href="#!">
								<img src="${metaUrl}" alt="Meta" />
							</a>
						</div>
					</div>
				</div>
      </div>
    </footer>
  `;
}

},{"./Footer.css":"YEjHm","./FooterResponsive.css":"5KZRv","e8d6a87b968add5e":"6rHkS","e2860e9f424a8a9":"3PTWJ","ae50f0b51621b892":"ewd8c","32c68228132c3a9b":"6U666","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"YEjHm":[function() {},{}],"5KZRv":[function() {},{}],"3PTWJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("discord.50bc2143.svg") + "?" + Date.now();

},{}],"ewd8c":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("meta.1d2fdf0d.svg") + "?" + Date.now();

},{}],"6U666":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("x.a08a6960.svg") + "?" + Date.now();

},{}],"8Mwkg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
var _indexJs = require("../components/index.js");
function router() {
    const appMain = document.querySelector(".main");
    const routes = {
        "/": (0, _indexJs.Home),
        "/tech-specs": (0, _indexJs.Tech_Specs),
        "/compare": (0, _indexJs.Compare)
    };
    const hash = location.hash.replace("#", "") || "/";
    const page = routes[hash] ? routes[hash]() : "<h1>404 Not Found</h1>";
    appMain.innerHTML = page;
}
window.addEventListener("hashchange", router);
window.addEventListener("load", router); // // Делаем lazy loading (динамический импорт если нужно):
 // export async function router() {
 //   const appMain = document.querySelector(".main");
 //   const hash = location.hash.replace("#", "") || "/";
 //   const routes = {                                                                                 
 //     "/": async () => {
 //       const module = await import("../components/Home/Home.js");
 //       return module.Home();
 //     },
 //     "/page-1": async () => {
 //       const module = await import("../components/Page_1/Page_1.js");
 //       return module.Page_1();
 //     },
 //     "/page-2": async () => {
 //       const module = await import("../components/Page_2/Page_2.js");
 //       return module.Page_2();
 //     },
 //     "/page-3": async () => {
 //       const module = await import("../components/Page_3/Page_3.js");
 //       return module.Page_3();
 //     },
 //   };
 //   const loadPage = routes[hash];                                                                   
 //   if (loadPage) {
 //     appMain.innerHTML = `<p class="loading">Loading...</p>`;                                       
 //     const content = await loadPage();                                                              
 //     appMain.innerHTML = content;                                                                   
 //   } else {
 //     appMain.innerHTML = `<h1>404 Not Found</h1>`;
 //   }
 // }
 // window.addEventListener("hashchange", router);
 // window.addEventListener("load", router);

},{"../components/index.js":"9q5R2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9q5R2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>(0, _homeJs.Home));
parcelHelpers.export(exports, "Tech_Specs", ()=>(0, _techSpecsJs.Tech_Specs));
parcelHelpers.export(exports, "Compare", ()=>(0, _compareJs.Compare));
var _homeJs = require("./Home/Home.js");
var _techSpecsJs = require("./Tech_Specs/Tech_Specs.js");
var _compareJs = require("./Compare/Compare.js");

},{"./Home/Home.js":"840R3","./Tech_Specs/Tech_Specs.js":"gvuIM","./Compare/Compare.js":"hVfww","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"840R3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home);
var _indexJs = require("./index.js");
function Home() {
    return `
    ${(0, _indexJs.Hero)()}                                                                                      
    ${(0, _indexJs.Carousel)()}                                                                                      
    ${(0, _indexJs.Features)()}                                                                                      
    ${(0, _indexJs.Personalize)()}                                                                                      
    ${(0, _indexJs.Sub)()}                                                                                      
  `;
}

},{"./index.js":"y6m2c","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"y6m2c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hero", ()=>(0, _heroJs.Hero));
parcelHelpers.export(exports, "Carousel", ()=>(0, _carouselJs.Carousel));
parcelHelpers.export(exports, "Features", ()=>(0, _featuresJs.Features));
parcelHelpers.export(exports, "Personalize", ()=>(0, _personalizeJs.Personalize));
parcelHelpers.export(exports, "Sub", ()=>(0, _subJs.Sub));
var _heroJs = require("./Hero/Hero.js");
var _carouselJs = require("./Carousel/Carousel.js");
var _featuresJs = require("./Features/Features.js");
var _personalizeJs = require("./Personalize/Personalize.js");
var _subJs = require("./Sub/Sub.js");

},{"./Hero/Hero.js":"5qLTx","./Carousel/Carousel.js":"3qQAK","./Features/Features.js":"bstR9","./Personalize/Personalize.js":"gkwl6","./Sub/Sub.js":"6BoQz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5qLTx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hero", ()=>Hero);
var _heroCss = require("./Hero.css");
var _heroResponsiveCss = require("./HeroResponsive.css");
const headphoneUrl = new URL(require("94be18b7e51b5f88")).href;
const headphone_2xUrl = new URL(require("1463253d8b8c3f08")).href;
function Hero() {
    return `
    <section class="hero">
      <div class="container">
        <h1 class="hero_title">Resonance</h1>
				<picture>
					<source srcset="${headphoneUrl} 1x, ${headphone_2xUrl} 2x" type="image/jpeg" />
					<img src="${headphoneUrl}" alt="Hero" class="hero__img" />
				</picture>
				<p class="hero_back">Aura Pro II</p>
      </div>
    </section>
  `;
}

},{"./Hero.css":"96tPu","./HeroResponsive.css":"hjpmr","94be18b7e51b5f88":"hQux4","1463253d8b8c3f08":"48VIC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"96tPu":[function() {},{}],"hjpmr":[function() {},{}],"hQux4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("headphone.ec93ec59.webp") + "?" + Date.now();

},{}],"48VIC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("headphone@2x.aa01d3d4.webp") + "?" + Date.now();

},{}],"3qQAK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
var _carouselCss = require("./Carousel.css");
var _carouselResponsiveCss = require("./CarouselResponsive.css");
var _carouselSliderJs = require("/src/scripts/carousel-slider.js");
const carousel_1Url = new URL(require("931908075cc451fd")).href;
const carousel_2Url = new URL(require("39254e31f441e5bd")).href;
const carousel_3Url = new URL(require("4c6b01aabbefae0f")).href;
let carouselDestroy = null;
function Carousel() {
    const markup = `
    <section class="carousel">
      <div class="container">
        <h2 class="carousel_title">Your Style. Your Sound.</h2>
        <p class="carousel_text">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
        <div class="slider_carousel">
          <div class="carousel__track">
            <div class="card-container">
              <div class="card">
                <img src="${carousel_1Url}" alt="Yellow headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${carousel_2Url}" alt="Green headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${carousel_3Url}" alt="Red headphones">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-pagination">
          <span class="dot yellow active" data-index="0"></span>
          <span class="dot green" data-index="1"></span>
          <span class="dot red" data-index="2"></span>
        </div>
        <p class="color_text">Choose a color that fits your flow.</p>
      </div>
    </section>
  `;
    requestAnimationFrame(()=>{
        if (typeof carouselDestroy === "function") {
            try {
                carouselDestroy();
            } catch (e) {}
            carouselDestroy = null;
        }
        carouselDestroy = (0, _carouselSliderJs.initCarousel)(".carousel");
    });
    return markup;
}

},{"./Carousel.css":"4cKMW","./CarouselResponsive.css":"7EpU1","/src/scripts/carousel-slider.js":"aFTSb","931908075cc451fd":"7d3gc","39254e31f441e5bd":"aew27","4c6b01aabbefae0f":"46Ech","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4cKMW":[function() {},{}],"7EpU1":[function() {},{}],"aFTSb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCarousel", ()=>initCarousel);
function initCarousel(rootSelector = ".carousel") {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    // Проверяем, не инициализирован ли уже
    if (root.dataset.carouselInit === "1") return;
    root.dataset.carouselInit = "1";
    const track = root.querySelector(".carousel__track");
    const cards = track ? Array.from(track.querySelectorAll(".card-container")) : [];
    const dots = Array.from(root.querySelectorAll(".carousel-pagination .dot"));
    if (!track || !cards.length) return;
    let activeIndex = Math.floor(cards.length / 2);
    const update = ()=>{
        cards.forEach((card, i)=>{
            card.classList.remove("prev", "active", "next");
            if (i === activeIndex) card.classList.add("active");
            else if (i === (activeIndex - 1 + cards.length) % cards.length) card.classList.add("prev");
            else if (i === (activeIndex + 1) % cards.length) card.classList.add("next");
        });
        dots.forEach((dot, i)=>dot.classList.toggle("active", i === activeIndex));
    };
    const goTo = (index)=>{
        activeIndex = (index + cards.length) % cards.length;
        update();
    };
    // Навигация по точкам
    dots.forEach((dot)=>{
        dot.addEventListener("click", ()=>{
            const idx = Number(dot.dataset.index);
            if (!Number.isNaN(idx)) goTo(idx);
        });
    });
    // Первичная отрисовка
    update();
    // Возвращаем функцию для удаления событий при уходе со страницы
    return function destroyCarousel() {
        root.dataset.carouselInit = "0";
        dots.forEach((dot)=>{
            const clone = dot.cloneNode(true);
            dot.replaceWith(clone);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7d3gc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("carousel_1.5bfd4b20.webp") + "?" + Date.now();

},{}],"aew27":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("carousel_2.17f3c46a.webp") + "?" + Date.now();

},{}],"46Ech":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("carousel_3.00bd939d.webp") + "?" + Date.now();

},{}],"bstR9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Features", ()=>Features);
var _featuresCss = require("./Features.css");
var _featuresResponsiveCss = require("./FeaturesResponsive.css");
var _featuresSliderJs = require("/src/scripts/features-slider.js");
const featuresUrl = new URL(require("93dc288f40d6bb7c")).href;
const features_mobileUrl = new URL(require("af4d33c7504574")).href;
const featuresSlides = [
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    },
    {
        text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        img: featuresUrl,
        imgMobile: features_mobileUrl
    }
];
let featuresDestroy = null;
function Features() {
    const slidesMarkup = featuresSlides.map((slide, i)=>`
      <div class="features-slide ${i % 2 === 1 ? "two" : ""}">
        <div class="features-card">
          <p>${slide.text}</p>
          <picture>
            <source srcset="${slide.imgMobile}" media="(max-width: 900px)">
            <img src="${slide.img}" alt="Feature ${i + 1}">
          </picture>
        </div>
      </div>
    `).join("");
    const markup = `
    <section class="features">
      <div class="container">
        <div class="features-slider">
          <div class="features-track">
            ${slidesMarkup}
          </div>
        </div>
      </div>
    </section>
  `;
    requestAnimationFrame(()=>{
        if (typeof featuresDestroy === "function") {
            try {
                featuresDestroy();
            } catch (e) {}
            featuresDestroy = null;
        }
        featuresDestroy = (0, _featuresSliderJs.initFeaturesSlider)(".features-slider");
    });
    return markup;
}

},{"./Features.css":"8v7x1","./FeaturesResponsive.css":"k5pf9","/src/scripts/features-slider.js":"pifHw","93dc288f40d6bb7c":"9AGU5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","af4d33c7504574":"6DlEU"}],"8v7x1":[function() {},{}],"k5pf9":[function() {},{}],"pifHw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFeaturesSlider", ()=>initFeaturesSlider);
function initFeaturesSlider(rootSelector = ".features-slider") {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    // предотвращаем повторную инициализацию
    if (root.dataset.featuresInit === "1") return;
    root.dataset.featuresInit = "1";
    const track = root.querySelector(".features-track");
    if (!track) return;
    let isDown = false;
    let startX;
    let scrollLeft;
    // --- drag мышкой ---
    const startDragging = (e)=>{
        isDown = true;
        track.classList.add("grabbing");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    };
    const stopDragging = ()=>{
        isDown = false;
        track.classList.remove("grabbing");
    };
    const move = (e)=>{
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1; // скорость реакции
        track.scrollLeft = scrollLeft - walk;
    };
    track.addEventListener("mousedown", startDragging);
    track.addEventListener("mouseleave", stopDragging);
    track.addEventListener("mouseup", stopDragging);
    track.addEventListener("mousemove", move);
    // --- drag на тач-устройствах ---
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e)=>{
        touchStartX = e.touches[0].pageX - track.offsetLeft;
        touchScrollLeft = track.scrollLeft;
    };
    const onTouchMove = (e)=>{
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - touchStartX) * 1;
        track.scrollLeft = touchScrollLeft - walk;
    };
    track.addEventListener("touchstart", onTouchStart, {
        passive: true
    });
    track.addEventListener("touchmove", onTouchMove, {
        passive: true
    });
    track.addEventListener("dragstart", (e)=>e.preventDefault());
    console.log("\u2705 Features slider initialized");
    // Возвращаем destroy-функцию
    return function destroyFeaturesSlider() {
        root.dataset.featuresInit = "0";
        // снимаем все слушатели без утечек
        track.removeEventListener("mousedown", startDragging);
        track.removeEventListener("mouseleave", stopDragging);
        track.removeEventListener("mouseup", stopDragging);
        track.removeEventListener("mousemove", move);
        track.removeEventListener("touchstart", onTouchStart);
        track.removeEventListener("touchmove", onTouchMove);
        console.log("\uD83E\uDDF9 Features slider destroyed");
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9AGU5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("features.3784dacd.webp") + "?" + Date.now();

},{}],"6DlEU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("features_mobile.90f79473.webp") + "?" + Date.now();

},{}],"gkwl6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Personalize", ()=>Personalize);
var _personalizeCss = require("./Personalize.css");
var _personalizeResponsiveCss = require("./PersonalizeResponsive.css");
var _personalizeSliderJs = require("/src/scripts/personalize-slider.js");
const personalize_1Url = new URL(require("7b4a2b9f23730fa")).href;
const personalize_2Url = new URL(require("ea1552819f0d295d")).href;
const personalize_3Url = new URL(require("d3dcc20de9975ce2")).href;
const personalizeSlides = [
    {
        img: personalize_1Url
    },
    {
        img: personalize_2Url
    },
    {
        img: personalize_3Url
    },
    {
        img: personalize_1Url
    },
    {
        img: personalize_2Url
    },
    {
        img: personalize_3Url
    },
    {
        img: personalize_1Url
    }
];
let personalizeDestroy = null;
function Personalize() {
    const slidesMarkup = personalizeSlides.map((slide, i)=>`
      <div class="personalize-slide ${i % 2 === 1 ? "two" : ""}">
        <div class="personalize-card">
          <img src="${slide.img}" alt="Personalize ${i + 1}">
        </div>
      </div>
    `).join("");
    const markup = `
    <section class="personalize">
      <div class="container">
				<h2 class="personalize_title">Every Detail matters</h2>
				<p class="personalize_text">From the stitch to the signal, precision lives here.</p>
        <div class="personalize-slider">
          <div class="personalize-track">
            ${slidesMarkup}
          </div>
        </div>
      </div>
    </section>
  `;
    requestAnimationFrame(()=>{
        if (typeof personalizeDestroy === "function") {
            try {
                personalizeDestroy();
            } catch (e) {}
            personalizeDestroy = null;
        }
        personalizeDestroy = (0, _personalizeSliderJs.initPersonalizeSlider)(".personalize-slider");
    });
    return markup;
}

},{"./Personalize.css":"lAbQi","./PersonalizeResponsive.css":"1UBb0","/src/scripts/personalize-slider.js":"ejDnP","7b4a2b9f23730fa":"abrrz","ea1552819f0d295d":"jx43S","d3dcc20de9975ce2":"fKkIw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lAbQi":[function() {},{}],"1UBb0":[function() {},{}],"ejDnP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPersonalizeSlider", ()=>initPersonalizeSlider);
function initPersonalizeSlider(rootSelector = ".personalize-slider") {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    // предотвращаем повторную инициализацию
    if (root.dataset.personalizeInit === "1") return;
    root.dataset.personalizeInit = "1";
    const track = root.querySelector(".personalize-track");
    if (!track) return;
    let isDown = false;
    let startX;
    let scrollLeft;
    // --- drag мышкой ---
    const startDragging = (e)=>{
        isDown = true;
        track.classList.add("grabbing");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    };
    const stopDragging = ()=>{
        isDown = false;
        track.classList.remove("grabbing");
    };
    const move = (e)=>{
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1; // скорость реакции
        track.scrollLeft = scrollLeft - walk;
    };
    track.addEventListener("mousedown", startDragging);
    track.addEventListener("mouseleave", stopDragging);
    track.addEventListener("mouseup", stopDragging);
    track.addEventListener("mousemove", move);
    // --- drag на тач-устройствах ---
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e)=>{
        touchStartX = e.touches[0].pageX - track.offsetLeft;
        touchScrollLeft = track.scrollLeft;
    };
    const onTouchMove = (e)=>{
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - touchStartX) * 1;
        track.scrollLeft = touchScrollLeft - walk;
    };
    track.addEventListener("touchstart", onTouchStart, {
        passive: true
    });
    track.addEventListener("touchmove", onTouchMove, {
        passive: true
    });
    track.addEventListener("dragstart", (e)=>e.preventDefault());
    console.log("\u2705 Personalize slider initialized");
    // Возвращаем destroy-функцию
    return function destroyPersonalizeSlider() {
        root.dataset.personalizeInit = "0";
        // снимаем все слушатели без утечек
        track.removeEventListener("mousedown", startDragging);
        track.removeEventListener("mouseleave", stopDragging);
        track.removeEventListener("mouseup", stopDragging);
        track.removeEventListener("mousemove", move);
        track.removeEventListener("touchstart", onTouchStart);
        track.removeEventListener("touchmove", onTouchMove);
        console.log("\uD83E\uDDF9 Personalize slider destroyed");
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"abrrz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("personalize_1.b376e5ca.webp") + "?" + Date.now();

},{}],"jx43S":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("personalize_2.c81391a9.webp") + "?" + Date.now();

},{}],"fKkIw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("personalize_3.ad803017.webp") + "?" + Date.now();

},{}],"6BoQz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sub", ()=>Sub);
var _subCss = require("./Sub.css");
var _subResponsiveCss = require("./SubResponsive.css");
function Sub() {
    return `
    <section class="sub">
			<div class="container">
				<p class="sub_text">Dreamlike Sound</p>
				<p class="sub_price">Starting at $320 \u{2014} Available Now.</p>
				<button class="sub_btn">Buy Now</button>
			</div>
		</section>
  `;
}

},{"./Sub.css":"6kPep","./SubResponsive.css":"6Etca","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6kPep":[function() {},{}],"6Etca":[function() {},{}],"gvuIM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tech_Specs", ()=>Tech_Specs);
var _indexJs = require("./index.js");
function Tech_Specs() {
    return `
    ${(0, _indexJs.Top)()}                                                                                      
    ${(0, _indexJs.FeaturesTech)()}    
  `;
}

},{"./index.js":"r7x6n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"r7x6n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Top", ()=>(0, _topJs.Top));
parcelHelpers.export(exports, "FeaturesTech", ()=>(0, _featuresTechJs.FeaturesTech));
var _topJs = require("./Top/Top.js");
var _featuresTechJs = require("./FeaturesTech/FeaturesTech.js");

},{"./Top/Top.js":"9EnXp","./FeaturesTech/FeaturesTech.js":"kktqC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9EnXp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Top", ()=>Top);
var _topCss = require("./Top.css");
var _topResponsiveCss = require("./TopResponsive.css");
var _topSliderJs = require("/src/scripts/top-slider.js");
const top_1Url = new URL(require("5d257e368412debb")).href;
const top_2Url = new URL(require("4775c61317bf9bff")).href;
const top_3Url = new URL(require("61c925ad04d0ecda")).href;
let topDestroy = null;
function Top() {
    const markup = `
    <section class="top">
      <div class="container">
        <div class="top_color">
          <p class="top_text">Color</p>
					<div class="slider_block">
          	<div class="top_slider">
            	<div class="top_slide">
              	<img src="${top_1Url}" alt="Yellow headphones">
            	</div>
            	<div class="top_slide active">
              	<img src="${top_2Url}" alt="Green headphones">
            	</div>
            	<div class="top_slide">
              	<img src="${top_3Url}" alt="Red headphones">
            	</div>
          	</div>
						<div class="top_dots">
            	<span class="dot" data-index="0" style="background:#D8B74B;"></span>
            	<span class="dot active" data-index="1" style="background:#94915B;"></span>
            	<span class="dot" data-index="2" style="background:#883D39;"></span>
          	</div>
					</div>
        </div>
      </div>
    </section>
  `;
    requestAnimationFrame(()=>{
        if (typeof topDestroy === "function") {
            try {
                topDestroy();
            } catch (e) {}
            topDestroy = null;
        }
        topDestroy = (0, _topSliderJs.initTopSlider)(".top");
    });
    return markup;
}

},{"./Top.css":"7l8g6","./TopResponsive.css":"2BsDR","/src/scripts/top-slider.js":"dQkby","5d257e368412debb":"4IWYa","4775c61317bf9bff":"82MW4","61c925ad04d0ecda":"gLOYk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7l8g6":[function() {},{}],"2BsDR":[function() {},{}],"dQkby":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTopSlider", ()=>initTopSlider);
function initTopSlider(rootSelector = ".top") {
    if (typeof window === "undefined") return ()=>{};
    const root = document.querySelector(rootSelector);
    if (!root) return ()=>{};
    // Если уже инициализировано — вернём функцию destroy (никаких дублей)
    if (root.dataset.topInit === "1") return ()=>{}; // noop destroy
    root.dataset.topInit = "1";
    const slides = Array.from(root.querySelectorAll(".top_slide"));
    const dots = Array.from(root.querySelectorAll(".top_dots .dot"));
    if (!slides.length || !dots.length) {
        // если нет нужных элементов — очистим флаг и выйдем
        delete root.dataset.topInit;
        return ()=>{};
    }
    let activeIndex = Math.floor(slides.length / 2);
    let isAnimating = false;
    const ANIM_MS = 320;
    function showSlide(index) {
        if (isAnimating || index === activeIndex) return;
        isAnimating = true;
        const current = slides[activeIndex];
        const next = slides[index];
        current.classList.remove("active");
        current.classList.add("fade-out");
        next.classList.add("fade-in");
        dots[activeIndex].classList.remove("active");
        dots[index].classList.add("active");
        setTimeout(()=>{
            current.classList.remove("fade-out");
            next.classList.remove("fade-in");
            next.classList.add("active");
            activeIndex = index;
            isAnimating = false;
        }, ANIM_MS);
    }
    const onDotClick = (e)=>{
        const dot = e.currentTarget;
        const idx = parseInt(dot.dataset.index, 10);
        if (!Number.isNaN(idx)) showSlide(idx);
    };
    dots.forEach((d)=>d.addEventListener("click", onDotClick));
    // вернуть destroy функцию — снимает слушатели и флаг и позволяет корректную реинициализацию
    const destroy = ()=>{
        dots.forEach((d)=>d.removeEventListener("click", onDotClick));
        delete root.dataset.topInit;
    };
    return destroy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4IWYa":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("top_1.89e86112.webp") + "?" + Date.now();

},{}],"82MW4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("top_2.0b2a9f7b.webp") + "?" + Date.now();

},{}],"gLOYk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("top_3.d9d8555e.webp") + "?" + Date.now();

},{}],"kktqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FeaturesTech", ()=>FeaturesTech);
var _featuresTechCss = require("./FeaturesTech.css");
var _featuresTechResponsiveCss = require("./FeaturesTechResponsive.css");
function FeaturesTech() {
    return `
    <section class="features_tech">
      <div class="tech_specs_content">
					<div class="tech_specs_block">
						<p class="tech_title">Audio Technology</p>
						<p class="tech_text">
							Custom-tuned 40mm Resonance\u{2122} drivers for deep bass.
							Ultra-low distortion signal processing.
							Adaptive Sound Sculpting\u{2122} \u{2014} real-time EQ.
							Spatial Audio Calibration with dynamic head tracking.
							Natural Voice Isolation for calls, focus, and immersive listening.
							Pressure-balancing acoustic vents for long-wear comfort.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Intelligence</p>
						<p class="tech_text">
							Dual noise-targeting microphones.
							Internal ear-position mic for personalized audio tuning.
							Proximity & motion sensors to detect wear and usage.
							Gesture-aware force sensor for effortless control.
							Accelerometer-assisted voice capture for clarity on the move.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Power</p>
						<p class="tech_text">
							Custom-designed <span>R2 Sound Core</span> chip.
							Advanced audio algorithms tuned for emotional clarity.
							Onboard neural audio engine for Spatial Audio and Adaptive EQ.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Controls</p>
						<p class="tech_text">
							Tap once to play/pause or answer a call.
							Tap twice to skip forward or end a call.
							Tap three times to rewind.
							Press and hold to access voice assistant.
							Automatic mute when removed, smart resume when worn.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Built for the Elements</p>
						<p class="tech_text">
							Rated <span>IPX4</span> for sweat and weather resistance.
							Designed for long sessions, light activity, or relaxed stillness.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Battery</p>
						<p class="tech_text">
							Up to <span>36 hours</span> total listening time with case.
							Up to <span>6.5 hours</span> on a single charge.
							Fast charge: <span>10 minutes = 2 hours of play.</span>
							USB-C charging + Qi-compatible wireless charging.
							LED status light + Find My compatible tone alert.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Connectivity</p>
						<p class="tech_text">
							Bluetooth\xae 5.3 low-latency audio.
							Multipoint connection with auto handoff.
							Seamless pairing across all your devices.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Materials</p>
						<p class="tech_text">
							100% recycled aluminum in internal frames.
							Bio-based mesh ear padding.
							Rare earth magnets sourced from reclaimed materials.
							Plastic-free, fiber-based packaging.
							Assembled in Zero Waste-certified facilities.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Sustainability & Materials</p>
						<p class="tech_text">
							100% recycled aluminum in internal frames.
							Bio-based mesh ear padding.
							Rare earth magnets sourced from reclaimed materials.
							Plastic-free, fiber-based packaging.
							Assembled in Zero Waste-certified facilities.
						</p>
					</div>
				</div>
    </section>
  `;
}

},{"./FeaturesTech.css":"g1QKy","./FeaturesTechResponsive.css":"fS9oi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g1QKy":[function() {},{}],"fS9oi":[function() {},{}],"hVfww":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Compare", ()=>Compare);
var _indexJs = require("./index.js");
function Compare() {
    return `
    ${(0, _indexJs.Models)()}                                                                                      		
  `;
}

},{"./index.js":"5BVMT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5BVMT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Models", ()=>(0, _modelsJs.Models));
var _modelsJs = require("./Models/Models.js");

},{"./Models/Models.js":"9wiVr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wiVr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Models", ()=>Models);
var _modelsCss = require("./Models.css");
var _modelsResponsiveCss = require("./ModelsResponsive.css");
const model_1Url = new URL(require("9109abcddbc32765")).href;
const model_2Url = new URL(require("3da62328f7f38aed")).href;
const batteryUrl = new URL(require("d44efc154979113b")).href;
const cpuUrl = new URL(require("3451d7df9502a63e")).href;
const dropUrl = new URL(require("6029749e354c71be")).href;
const earUrl = new URL(require("fe864829a613f6f1")).href;
const equalizerUrl = new URL(require("b738ff7422f7a6d2")).href;
const microphoneUrl = new URL(require("e22c9eeeac92652a")).href;
const minusUrl = new URL(require("eae30639a0cc5606")).href;
const simpleUrl = new URL(require("cf57f748a3057d01")).href;
const tapUrl = new URL(require("739eeb6d8140fa63")).href;
const userUrl = new URL(require("da7317abcdf6140b")).href;
function Models() {
    return `
    <section class="models">
			<div class="container">
				<h2 class="models_title">Compare Resonance models</h2>
				<p class="models_text">Get help choosing. Chat with a Specialist.</p>
				<div class="models_block">
					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Aura Pro II</p>
							<img src="${model_1Url}" alt="Headphones">
							<p class="models_price">Starting at $320</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${cpuUrl}" alt="Icon">
								<p class="compare_text">R1 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${simpleUrl}" alt="Icon">
								<p class="compare_text">2x more Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${userUrl}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${equalizerUrl}" alt="Icon">
								<p class="compare_text">Lossless Audio</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${batteryUrl}" alt="Icon">
								<p class="compare_text">Up to 17 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${microphoneUrl}" alt="Icon">
								<p class="compare_text">5 microphones total</p>
							</div>
						</div>
					</div>

					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Flow II</p>
							<img src="${model_2Url}" alt="Headphones">
							<p class="models_price">Starting at $160</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${cpuUrl}" alt="Icon">
								<p class="compare_text">R2 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${simpleUrl}" alt="Icon">
								<p class="compare_text">Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${userUrl}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${earUrl}" alt="Icon">
								<p class="compare_text">Hearing Test and Hearing Protection</p>
							</div>
							<div class="compare_block">
								<img src="${tapUrl}" alt="Icon">
								<p class="compare_text">Touch sensor</p>
							</div>
							<div class="compare_block">
								<img src="${batteryUrl}" alt="Icon">
								<p class="compare_text">Up to 6 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${dropUrl}" alt="Icon">
								<p class="compare_text">Water resistant</p>
							</div>
							<div class="compare_block">
								<img src="${microphoneUrl}" alt="Icon">
								<p class="compare_text">Dual beamforming microphones</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  `;
}

},{"./Models.css":"cCmbh","./ModelsResponsive.css":"02PNv","9109abcddbc32765":"81yxq","3da62328f7f38aed":"50hP2","d44efc154979113b":"bfufz","3451d7df9502a63e":"iBvDq","6029749e354c71be":"gXT8z","fe864829a613f6f1":"kxFDk","b738ff7422f7a6d2":"dpGV3","e22c9eeeac92652a":"ixWWi","eae30639a0cc5606":"6dbos","cf57f748a3057d01":"l1zXw","739eeb6d8140fa63":"2rtmc","da7317abcdf6140b":"9WrKD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cCmbh":[function() {},{}],"02PNv":[function() {},{}],"81yxq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("model_1.ea3b7ad6.webp") + "?" + Date.now();

},{}],"50hP2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("model_2.14ec299a.webp") + "?" + Date.now();

},{}],"bfufz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("battery.b06b9261.svg") + "?" + Date.now();

},{}],"iBvDq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("cpu.4924a963.svg") + "?" + Date.now();

},{}],"gXT8z":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("drop.f2f462e7.svg") + "?" + Date.now();

},{}],"kxFDk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ear.2c098815.svg") + "?" + Date.now();

},{}],"dpGV3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("equalizer.1051bdb4.svg") + "?" + Date.now();

},{}],"ixWWi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("microphone.aa90d472.svg") + "?" + Date.now();

},{}],"6dbos":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("minus.26b1373f.svg") + "?" + Date.now();

},{}],"l1zXw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple.0cab2caa.svg") + "?" + Date.now();

},{}],"2rtmc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tap.3d4da99b.svg") + "?" + Date.now();

},{}],"9WrKD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("user.cd38199b.svg") + "?" + Date.now();

},{}],"2IMOB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mobileNav);
function mobileNav() {
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    if (!navBtn || !nav) return;
    let scrollY = 0;
    function openMenu() {
        scrollY = window.scrollY;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        // Фиксируем страницу и компенсируем полосу прокрутки
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.classList.add('no-scroll');
        nav.classList.add('mobile-nav--open');
        menuIcon.classList.add('nav-icon--active');
    }
    function closeMenu() {
        // Восстанавливаем прокрутку
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        document.body.classList.remove('no-scroll');
        window.scrollTo(0, scrollY);
        nav.classList.remove('mobile-nav--open');
        menuIcon.classList.remove('nav-icon--active');
    }
    function toggleMenu() {
        if (nav.classList.contains('mobile-nav--open')) closeMenu();
        else openMenu();
    }
    navBtn.addEventListener('click', toggleMenu);
    navLinks.forEach((link)=>link.addEventListener('click', closeMenu));
    document.addEventListener('click', (e)=>{
        if (nav.classList.contains('mobile-nav--open') && !nav.contains(e.target) && !navBtn.contains(e.target)) closeMenu();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3j7oW":[function(require,module,exports,__globalThis) {
// Отключает переходы по демо-ссылкам (например, href="#" или href="#!")
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disableDemoLinks", ()=>disableDemoLinks);
function disableDemoLinks() {
    document.addEventListener("click", (e)=>{
        const link = e.target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href");
        // Игнорируем пустые или фейковые ссылки
        if (href === "#" || href === "#!" || href === "" || href === "javascript:void(0)") {
            e.preventDefault();
            e.stopPropagation();
            // Для наглядности можно добавить небольшой визуальный эффект (по желанию)
            link.style.transition = "opacity 0.15s ease";
            link.style.opacity = "0.6";
            setTimeout(()=>link.style.opacity = "1", 150);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["huHYX","3Aj1C"], "3Aj1C", "parcelRequire0a50", {}, "./", "/")

//# sourceMappingURL=resonance.4841ef46.js.map
