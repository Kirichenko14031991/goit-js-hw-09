!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");function n(){var t,e=(t=Math.floor(16777215*Math.random()).toString(16),"#".concat(t.padStart(6,"0")));document.body.style.backgroundColor=e}e.addEventListener("click",(function(){if(t)return;a.disabled=!1,e.disabled=!0,t=setInterval(n,1e3)})),a.addEventListener("click",(function(){clearInterval(t),t=null,e.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.2d23e03b.js.map
