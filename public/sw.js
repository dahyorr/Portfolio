if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>n(e,i),o={module:{uri:i},exports:r,require:t};s[i]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-FDY_AockTdCfT5m2pH9H5.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FDY_AockTdCfT5m2pH9H5/_buildManifest.js",revision:"4f7a750d888cf6eb1fd786329313acf3"},{url:"/_next/static/FDY_AockTdCfT5m2pH9H5/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/FDY_AockTdCfT5m2pH9H5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-b164b11aa951b022.js",revision:"b164b11aa951b022"},{url:"/_next/static/chunks/1a48c3c1-309c7093653b9115.js",revision:"309c7093653b9115"},{url:"/_next/static/chunks/252f366e-e865cb4a8177752b.js",revision:"e865cb4a8177752b"},{url:"/_next/static/chunks/303-32e985f013a7c39a.js",revision:"32e985f013a7c39a"},{url:"/_next/static/chunks/758-e016275fbd9445df.js",revision:"e016275fbd9445df"},{url:"/_next/static/chunks/78e521c3-efd96a383edd7ac3.js",revision:"efd96a383edd7ac3"},{url:"/_next/static/chunks/823.dbbc3cb020f3e73e.js",revision:"dbbc3cb020f3e73e"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/404-f7cd911a67af38cf.js",revision:"f7cd911a67af38cf"},{url:"/_next/static/chunks/pages/_app-30834a80c18e5605.js",revision:"30834a80c18e5605"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/_offline-a4c30942b2a71ab8.js",revision:"a4c30942b2a71ab8"},{url:"/_next/static/chunks/pages/index-4ed660dda666ede1.js",revision:"4ed660dda666ede1"},{url:"/_next/static/chunks/pages/test-fa48debd300c94e9.js",revision:"fa48debd300c94e9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-3e4924e3e40e493e.js",revision:"3e4924e3e40e493e"},{url:"/_next/static/css/d00e489e3ca6809b.css",revision:"d00e489e3ca6809b"},{url:"/_offline",revision:"FDY_AockTdCfT5m2pH9H5"},{url:"/android-chrome-192x192.png",revision:"4118d23c16e6b7d955e8317e62cf24fa"},{url:"/android-chrome-512x512.png",revision:"ea56d0754e3773f6e8cff5ef486b8c72"},{url:"/apple-touch-icon.png",revision:"f928bbf4a3f9dfdd82e664391b489016"},{url:"/favicon-16x16.png",revision:"857edba1b3800a562317e5030d28d080"},{url:"/favicon-32x32.png",revision:"cd6fa5b0b6720d49a19905bec006a0a1"},{url:"/favicon.ico",revision:"a16889a82d7c1576516a5425a6e3ed23"},{url:"/icons/clapperboard.png",revision:"07db2dc020ccd753556390b036d9ba98"},{url:"/icons/cloud-service.png",revision:"e35e99a211596466eabb43629b2596bf"},{url:"/icons/computer.png",revision:"f8025dc4bd20a171e2b3cd075d47c402"},{url:"/icons/console.png",revision:"f262e429b7182851c11b67dcc22bdd08"},{url:"/icons/fast-food.png",revision:"1e4a719b69fdf75e30172e981c8b83f6"},{url:"/icons/maintenance.png",revision:"cd2d927d4c1c05d75f77e093dc592234"},{url:"/icons/sports.png",revision:"8ad42deb5f9ebd538057715b9c2877a7"},{url:"/icons/web-development.png",revision:"616ecbe0e4a1fab9741bf60500345853"},{url:"/images/layered-waves.svg",revision:"212a8eb5f9f17d30317bf3c9bed98787"},{url:"/images/wave.svg",revision:"ccf2155f59377e0a3fdfed7a6ca41191"},{url:"/manifest.json",revision:"0fafd19dfc69673ea85c149909c6dd93"},{url:"/resume.pdf",revision:"356ef7782a735a081948a880e6a689e7"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
