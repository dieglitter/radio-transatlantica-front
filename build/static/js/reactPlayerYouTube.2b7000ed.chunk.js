(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[12],{289:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(0)),o=n(82),a=n(143);function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=/list=([a-zA-Z0-9_-]+)/,w=/user\/([a-zA-Z0-9_-]+)\/?/,O=/youtube-nocookie\.com/,j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var e,n,i,u=h(l);function l(){var t;y(this,l);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return P(v(t=u.call.apply(u,[this].concat(n))),"callPlayer",o.callPlayer),P(v(t),"parsePlaylist",(function(e){return e instanceof Array?{listType:"playlist",playlist:e.map(t.getID).join(",")}:g.test(e)?{listType:"playlist",list:s(e.match(g),2)[1]}:w.test(e)?{listType:"user_uploads",list:s(e.match(w),2)[1]}:{}})),P(v(t),"onStateChange",(function(e){var n=e.data,r=t.props,o=r.onPlay,a=r.onPause,i=r.onBuffer,u=r.onBufferEnd,l=r.onEnded,c=r.onReady,s=r.loop,f=r.config,y=f.playerVars,p=f.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,b=d.PLAYING,v=d.PAUSED,m=d.BUFFERING,P=d.ENDED,g=d.CUED;if(n===h&&p(),n===b&&(o(),u()),n===v&&a(),n===m&&i(),n===P){var w=!!t.callPlayer("getPlaylist");s&&!w&&(y.start?t.seekTo(y.start):t.play()),l()}n===g&&c()})),P(v(t),"mute",(function(){t.callPlayer("mute")})),P(v(t),"unmute",(function(){t.callPlayer("unMute")})),P(v(t),"ref",(function(e){t.container=e})),t}return e=l,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(t){return!t||t instanceof Array?null:t.match(a.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(t,e){var n=this,r=this.props,a=r.playing,i=r.muted,u=r.playsinline,l=r.controls,s=r.loop,f=r.config,y=r.onError,p=f.playerVars,d=f.embedOptions,h=this.getID(t);if(e)return g.test(t)||w.test(t)||t instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(t)):void this.player.cueVideoById({videoId:h,startSeconds:(0,o.parseStartTime)(t)||p.start,endSeconds:(0,o.parseEndTime)(t)||p.end});(0,o.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(function(t){return t.loaded})).then((function(e){n.container&&(n.player=new e.Player(n.container,c({width:"100%",height:"100%",videoId:h,playerVars:c(c({autoplay:a?1:0,mute:i?1:0,controls:l?1:0,start:(0,o.parseStartTime)(t),end:(0,o.parseEndTime)(t),origin:window.location.origin,playsinline:u?1:0},n.parsePlaylist(t)),p),events:{onReady:function(){s&&n.player.setLoop(!0),n.props.onReady()},onStateChange:n.onStateChange,onError:function(t){return y(t.data)}},host:O.test(t)?"https://www.youtube-nocookie.com":void 0},d)))}),y)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(t){this.callPlayer("seekTo",t),this.props.playing||this.pause()}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",100*t)}},{key:"setPlaybackRate",value:function(t){this.callPlayer("setPlaybackRate",t)}},{key:"setLoop",value:function(t){this.callPlayer("setLoop",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var t={width:"100%",height:"100%",display:this.props.display};return r.default.createElement("div",{style:t},r.default.createElement("div",{ref:this.ref}))}}])&&p(e.prototype,n),i&&p(e,i),l}(r.Component);e.default=j,P(j,"displayName","YouTube"),P(j,"canPlay",a.canPlay.youtube)}}]);
//# sourceMappingURL=reactPlayerYouTube.2b7000ed.chunk.js.map