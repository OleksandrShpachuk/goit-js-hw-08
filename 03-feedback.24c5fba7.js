function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function T(){var e=v();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,o-(e-c)):n}(e))}function h(e){return f=void 0,g&&r?y(e):(r=i=void 0,a)}function w(){var e=v(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j=y.querySelector(".feedback-form input"),S=y.querySelector(".feedback-form textarea");let T={};y.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===S.value||""===j.value)return alert("Заповніть всі поля");console.log(T),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),T={}})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(j.value=e.email,T.email=e.email);e.message&&(S.value=e.message,T.message=e.message)}();
//# sourceMappingURL=03-feedback.24c5fba7.js.map
