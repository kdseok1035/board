(function(){"use strict";var t={3148:function(t,n,e){var r=e(9963),o=e(6252);function i(t,n,e,r,i,u){const a=(0,o.up)("PageHeader"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(l)],64)}const u={id:"nav"},a=(0,o._)("h1",null,"게시판",-1);function l(t,n,e,r,i,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",u,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[a])),_:1})])])}var c={},f=e(3744);const s=(0,f.Z)(c,[["render",l]]);var d=s,p={name:"App",components:{PageHeader:d}};const b=(0,f.Z)(p,[["render",i]]);var h=b,v=e(2201),m=(e(7658),e(3577));const g={class:"board-list"},w={id:"list"},y=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"번호"),(0,o._)("th",null,"제목"),(0,o._)("th",null,"날짜"),(0,o._)("th",null,"작성자")])],-1);function _(t,n,e,r,i,u){const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{type:"button",onClick:n[0]||(n[0]=n=>t.$router.push("/write"))},"글쓰기"),(0,o._)("div",g,[(0,o._)("table",w,[y,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.blist,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.bseq},[(0,o._)("td",null,(0,m.zw)(t.bseq),1),(0,o.Wm)(a,{to:`/content?bseq=${t.bseq}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(t.btitle),1)])),_:2},1032,["to"]),(0,o._)("td",null,(0,m.zw)(t.bdate),1),(0,o._)("td",null,(0,m.zw)(t.bauthor),1)])))),128))])])])],64)}var k=e(6154),O={data(){return{blist:[]}},created(){k.Z.get("http://localhost:8082/").then((t=>{this.blist=t.data})).catch((t=>{console.error(t)}))}};const j=(0,f.Z)(O,[["render",_]]);var P=j;const C=[{path:"/",name:"PageHome",component:P},{path:"/content",name:"Content",component:()=>e.e(839).then(e.bind(e,6839))},{path:"/write",name:"Write",component:()=>e.e(6).then(e.bind(e,1006))},{path:"/edit",name:"Edit",component:()=>e.e(78).then(e.bind(e,6078))}],E=(0,v.p7)({history:(0,v.PO)("/"),routes:C});var T=E;const H=(0,r.ri)(h);H.config.globalProperties.$axios=k.Z,H.config.globalProperties.$serverUrl="//localhost:8082",H.use(T).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"."+{6:"d1f7ef39",78:"3aae7e21",839:"1801ad29"}[t]+".js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="vue-frontboard:";e.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){a=s;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=r),t[r]=[o];var d=function(n,e){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(n),a=new Error,l=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};e.l(u,l,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(l)var f=l(e)}for(n&&n(r);c<u.length;c++)i=u[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},r=self["webpackChunkvue_frontboard"]=self["webpackChunkvue_frontboard"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3148)}));r=e.O(r)})();
//# sourceMappingURL=app.a55e2126.js.map