(function(){"use strict";var t={9815:function(t,e,n){var r=n(9963),o=n(6252);function i(t,e,n,r,i,a){const u=(0,o.up)("PageHeader"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(l)],64)}const a={id:"nav"},u=(0,o._)("h1",null,"게시판",-1);function l(t,e,n,r,i,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",a,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>[u])),_:1})])])}var s={},c=n(3744);const d=(0,c.Z)(s,[["render",l]]);var f=d,p={name:"App",components:{PageHeader:f}};const h=(0,c.Z)(p,[["render",i]]);var b=h,g=n(2201),v=(n(7658),n(3577));const m=t=>((0,o.dD)("data-v-7ae3498a"),t=t(),(0,o.Cn)(),t),w={class:"board-list"},y={id:"list"},_=m((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"번호"),(0,o._)("th",null,"제목"),(0,o._)("th",null,"날짜"),(0,o._)("th",null,"작성자")])],-1))),P={class:"write-button",align:"right"},k={class:"btn-cover"},C=["disabled"],O={class:"page-count"},E=["disabled"];function j(t,e,n,r,i,a){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",w,[(0,o._)("table",y,[_,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.blist,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.bseq},[(0,o._)("td",null,(0,v.zw)(t.bseq),1),(0,o._)("td",null,[(0,o.Wm)(u,{to:`/boardContent?bseq=${t.bseq}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,v.zw)(t.btitle),1)])),_:2},1032,["to"])]),(0,o._)("td",null,(0,v.zw)(t.bdate),1),(0,o._)("td",null,(0,v.zw)(t.bauthor),1)])))),128))])]),(0,o._)("div",P,[(0,o._)("button",{type:"button",onClick:e[0]||(e[0]=e=>t.$router.push("/boardWrite"))},"글쓰기")])]),(0,o._)("div",k,[(0,o._)("button",{disabled:1==i.plist.nowPage,onClick:e[1]||(e[1]=(...t)=>a.prevPage&&a.prevPage(...t))}," 이전 ",8,C),(0,o._)("span",O,(0,v.zw)(i.plist.nowPage)+" / "+(0,v.zw)(i.plist.lastPage)+" 페이지",1),(0,o._)("button",{disabled:i.plist.nowPage==i.plist.lastPage,onClick:e[2]||(e[2]=(...t)=>a.nextPage&&a.nextPage(...t))}," 다음 ",8,E)])],64)}var A=n(6154),x={data(){return{blist:[],plist:[]}},created(){const t=this.$route.query.nowPage;null==t?A.Z.get("http://localhost:8082/").then((t=>{this.blist=t.data.viewAll,this.plist=t.data.paging})).catch((t=>{console.error(t)})):A.Z.get(`http://localhost:8082/?nowPage=${t}`).then((t=>{this.blist=t.data.viewAll,this.plist=t.data.paging})).catch((t=>{console.error(t)}))},methods:{nextPage(){const t=this.plist.nowPage+1;location.href=`/?nowPage=${t}`},prevPage(){const t=this.plist.nowPage-1;location.href=`/?nowPage=${t}`}}};const S=(0,c.Z)(x,[["render",j],["__scopeId","data-v-7ae3498a"]]);var N=S;const T=[{path:"/",name:"PageHome",component:N},{path:"/boardContent",name:"Content",component:()=>n.e(875).then(n.bind(n,2875))},{path:"/boardWrite",name:"Write",component:()=>n.e(42).then(n.bind(n,2042))},{path:"/boardEdit",name:"Edit",component:()=>n.e(66).then(n.bind(n,7066))}],D=(0,g.p7)({history:(0,g.PO)("/"),routes:T});var $=D;const q=(0,r.ri)(b);q.config.globalProperties.$axios=A.Z,q.config.globalProperties.$serverUrl="//localhost:8082",q.use($).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){t.splice(c--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{42:"1af6bad9",66:"722b07b6",875:"3388ecb4"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{42:"f59d4504",66:"e711807d",875:"82c4b6e2"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-frontboard:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,i.parentNode&&i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={42:1,66:1,875:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,l=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],l=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkvue_frontboard"]=self["webpackChunkvue_frontboard"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9815)}));r=n.O(r)})();
//# sourceMappingURL=app.08dcab39.js.map