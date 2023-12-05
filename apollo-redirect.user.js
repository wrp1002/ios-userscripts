// ==UserScript==
// @name         Apollo Redirect
// @version      1.0
// @match        *://*.reddit.com/*
// @homepage     https://github.com/wrp1002/ios-userscripts
// ==/UserScript==
window.location.href = `apollo://www.reddit.com/${window.location.pathname.slice(1)}`;

setTimeout(function() {
close();
}, 3000);
