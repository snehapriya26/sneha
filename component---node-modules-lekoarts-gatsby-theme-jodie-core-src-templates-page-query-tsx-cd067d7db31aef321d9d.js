(self.webpackChunkjodie=self.webpackChunkjodie||[]).push([[155],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function u(t,r,c){return n()?(e.exports=u=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.default=e.exports,e.exports.__esModule=!0),u.apply(null,arguments)}e.exports=u,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),u=r(379),c=r(8206);e.exports=function(e){return o(e)||n(e)||u(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5359:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var o=r(9756),n=r(7294),u=r(977),c=r(6725),s=r(20),p=r(5873),a=function(e){var t=e.data.page,r=e.location;return(0,u.tZ)(s.Z,{color:t.color||void 0},(0,u.tZ)(p.Z,{title:t.title,description:t.excerpt,pathname:r.pathname,image:t.cover.childImageSharp.resize.src}),(0,u.tZ)("div",{sx:{variant:t.custom?"content.custom":"content.page"},"data-testid":"page-content"},(0,u.tZ)(c.MDXRenderer,null,t.body)))},i=["children"];var l=function(e){var t=e.children,r=(0,o.Z)(e,i);return n.createElement(a,r,t)}},6725:function(e,t,r){var o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9100),n=r(319),u=r(9713),c=r(7316),s=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),l=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,s),p=f(t),d=i.useMemo((function(){if(!r)return null;var e=a({React:i,mdx:l},p),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return i.createElement(d,a({},u))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-jodie-core-src-templates-page-query-tsx-cd067d7db31aef321d9d.js.map