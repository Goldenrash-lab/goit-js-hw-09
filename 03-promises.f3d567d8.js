var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");function i(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{const i={position:e,delay:t};o?n(i):r(i)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=+e.currentTarget.elements.delay.value,n=+e.currentTarget.elements.step.value,r=+e.currentTarget.elements.amount.value;for(let e=0;e<r;e++){i(e,t+e*n).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e+1} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.f3d567d8.js.map