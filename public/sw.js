if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-Mr-0HiLuGpeuvFPG7wCNo.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Mr-0HiLuGpeuvFPG7wCNo/_buildManifest.js",revision:"e88e8b4dcafbf708c67151d86edd8ce4"},{url:"/_next/static/Mr-0HiLuGpeuvFPG7wCNo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/386.0bf40717d3c1a091.js",revision:"0bf40717d3c1a091"},{url:"/_next/static/chunks/389.cf1573b52f4fd089.js",revision:"cf1573b52f4fd089"},{url:"/_next/static/chunks/523-d511710667ca6722.js",revision:"d511710667ca6722"},{url:"/_next/static/chunks/638-e9a95640713a4b76.js",revision:"e9a95640713a4b76"},{url:"/_next/static/chunks/728-89a02d6358351637.js",revision:"89a02d6358351637"},{url:"/_next/static/chunks/805-faf8cf89a73598c3.js",revision:"faf8cf89a73598c3"},{url:"/_next/static/chunks/813-22f5aec508e97ec7.js",revision:"22f5aec508e97ec7"},{url:"/_next/static/chunks/855-a3a2f4d1652a9e82.js",revision:"a3a2f4d1652a9e82"},{url:"/_next/static/chunks/865.691d49f59781bc0a.js",revision:"691d49f59781bc0a"},{url:"/_next/static/chunks/873.bbf349d1f4551ef3.js",revision:"bbf349d1f4551ef3"},{url:"/_next/static/chunks/882-5a1e87481302bb3d.js",revision:"5a1e87481302bb3d"},{url:"/_next/static/chunks/886.98f216c5a4b034b5.js",revision:"98f216c5a4b034b5"},{url:"/_next/static/chunks/framework-bbecb7d54330d002.js",revision:"bbecb7d54330d002"},{url:"/_next/static/chunks/main-09652b4ecc9d00bb.js",revision:"09652b4ecc9d00bb"},{url:"/_next/static/chunks/pages/_app-8e522531d0e6d9fc.js",revision:"8e522531d0e6d9fc"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/_offline-9ac1cd3867f6a085.js",revision:"9ac1cd3867f6a085"},{url:"/_next/static/chunks/pages/about-25051d4009e33324.js",revision:"25051d4009e33324"},{url:"/_next/static/chunks/pages/beautifulliving-a062987c2251ecb9.js",revision:"a062987c2251ecb9"},{url:"/_next/static/chunks/pages/brands-82dc6f0f2c12ed93.js",revision:"82dc6f0f2c12ed93"},{url:"/_next/static/chunks/pages/brands/%5B...id%5D-fd7d03948d5db28a.js",revision:"fd7d03948d5db28a"},{url:"/_next/static/chunks/pages/catalogs-e8d824ea251a5e65.js",revision:"e8d824ea251a5e65"},{url:"/_next/static/chunks/pages/checkout-17edf84419f5683f.js",revision:"17edf84419f5683f"},{url:"/_next/static/chunks/pages/designers-cfc9087e3abb1e71.js",revision:"cfc9087e3abb1e71"},{url:"/_next/static/chunks/pages/designers/%5B...id%5D-97526afd421c9f00.js",revision:"97526afd421c9f00"},{url:"/_next/static/chunks/pages/hell-83585559daff0b1c.js",revision:"83585559daff0b1c"},{url:"/_next/static/chunks/pages/index-f26ce8436ddbbf46.js",revision:"f26ce8436ddbbf46"},{url:"/_next/static/chunks/pages/maintenance-867d552ac5937338.js",revision:"867d552ac5937338"},{url:"/_next/static/chunks/pages/news-c42110cd15c8a8f4.js",revision:"c42110cd15c8a8f4"},{url:"/_next/static/chunks/pages/news/%5B...id%5D-11366d8601a140e7.js",revision:"11366d8601a140e7"},{url:"/_next/static/chunks/pages/policies-b489427131daa1b8.js",revision:"b489427131daa1b8"},{url:"/_next/static/chunks/pages/products-8224bafcc345ac0b.js",revision:"8224bafcc345ac0b"},{url:"/_next/static/chunks/pages/products/%5B...id%5D-11da451997135914.js",revision:"11da451997135914"},{url:"/_next/static/chunks/pages/products/category/%5B...category%5D-743490f7a8570b9c.js",revision:"743490f7a8570b9c"},{url:"/_next/static/chunks/pages/products/sub-category/%5B...sub-category%5D-c51aaca1efb34ea0.js",revision:"c51aaca1efb34ea0"},{url:"/_next/static/chunks/pages/promotion-29972032a9a13445.js",revision:"29972032a9a13445"},{url:"/_next/static/chunks/pages/search-8b0484151bca9428.js",revision:"8b0484151bca9428"},{url:"/_next/static/chunks/pages/services/interior-decoration-0843da9f5371f1fa.js",revision:"0843da9f5371f1fa"},{url:"/_next/static/chunks/pages/services/lighting-design-609263e0bce4a236.js",revision:"609263e0bce4a236"},{url:"/_next/static/chunks/pages/shop-by-brands-092595f9f8026546.js",revision:"092595f9f8026546"},{url:"/_next/static/chunks/pages/shop-by-rooms-80ccfd4f2b14c687.js",revision:"80ccfd4f2b14c687"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a7ead0b98be4a05c.js",revision:"a7ead0b98be4a05c"},{url:"/_next/static/css/7d13830f9f4d1100.css",revision:"7d13830f9f4d1100"},{url:"/_next/static/css/b8e302d41b271438.css",revision:"b8e302d41b271438"},{url:"/_next/static/css/bea09ffcb869fafb.css",revision:"bea09ffcb869fafb"},{url:"/_next/static/css/c602aece2f5b835c.css",revision:"c602aece2f5b835c"},{url:"/_next/static/media/bb37b1e7f87815f1-s.p.otf",revision:"c91f5994cb4868d3faec114182c76f60"},{url:"/_offline",revision:"Mr-0HiLuGpeuvFPG7wCNo"},{url:"/favicon.ico",revision:"13f0735d8c43a88d659d39e380361fce"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
