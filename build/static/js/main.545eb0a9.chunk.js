(this.webpackJsonpdbhub_front=this.webpackJsonpdbhub_front||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),s=t.n(c),r=(t(10),t(2)),m=t.n(r),i=t(1),o=(t(12),t(13),l.a.createElement("svg",{className:"copy",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},l.a.createElement("g",{"data-name":"Layer 3"},l.a.createElement("path",{d:"M40.63,13H12.38A4.69,4.69,0,0,0,7.7,17.67V57.31A4.69,4.69,0,0,0,12.38,62H40.63a4.69,4.69,0,0,0,4.69-4.69V17.67A4.69,4.69,0,0,0,40.63,13Zm2.69,44.33A2.69,2.69,0,0,1,40.63,60H12.38A2.69,2.69,0,0,1,9.7,57.31V17.67A2.69,2.69,0,0,1,12.38,15H40.63a2.69,2.69,0,0,1,2.69,2.69Z"}),l.a.createElement("path",{d:"M51.74,2H23.26a4.58,4.58,0,0,0-4.58,4.57v3.55a1,1,0,0,0,2,0V6.57A2.58,2.58,0,0,1,23.26,4H51.74A2.57,2.57,0,0,1,54.3,6.57V46.44A2.58,2.58,0,0,1,51.74,49H48.5a1,1,0,0,0,0,2h3.24a4.58,4.58,0,0,0,4.57-4.58V6.57A4.57,4.57,0,0,0,51.74,2Z"})))),u=function(e,a){return{nodejs:l.a.createElement("p",null,l.a.createElement("span",{className:"keyword"},"const")," ","{",l.a.createElement("span",{className:"variable"},"getDatabase"),"}"," =",l.a.createElement("span",{className:"func"}," require"),"(",l.a.createElement("span",{className:"string"},"'dbhub'"),");",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"apikey")," =",l.a.createElement("span",{className:"string"}," '",a,"'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"db")," =",l.a.createElement("span",{className:"func"}," getDatabase"),"(",l.a.createElement("span",{className:"variable"},"apiKey"),");",l.a.createElement("br",null),l.a.createElement("br",null),"// Create collection",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"collectionName")," = ",l.a.createElement("span",{className:"string"},"'example'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"collection")," = ",l.a.createElement("span",{className:"variable"},"db"),".",l.a.createElement("span",{className:"func"},"getCollection"),"(",l.a.createElement("span",{className:"variable"},"collectionName"),");",l.a.createElement("br",null),l.a.createElement("br",null),"//Usage",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"create"),"(",l.a.createElement("span",{className:"variable"},"element"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"id"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"read"),"(",l.a.createElement("span",{className:"variable"},"id"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"element"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"update"),"(",l.a.createElement("span",{className:"variable"},"id"),", ",l.a.createElement("span",{className:"variable"},"element"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"success"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"delete"),"(",l.a.createElement("span",{className:"variable"},"id"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"success"),") => ","{}",");",l.a.createElement("br",null)),python:l.a.createElement("p",null,l.a.createElement("span",{className:"keyword"},"import "),l.a.createElement("span",{className:"variable"},"getDatabase")," from ",l.a.createElement("span",{className:"func"}),"(",l.a.createElement("span",{className:"string"},"'dbhub'"),")",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"apikey")," =",l.a.createElement("span",{className:"string"}," '",a,"'"),l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"db")," =",l.a.createElement("span",{className:"func"}," get_database"),"(",l.a.createElement("span",{className:"variable"},"apiKey"),")",l.a.createElement("br",null),l.a.createElement("br",null),"// Create collection",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection_name")," = ",l.a.createElement("span",{className:"string"},"'example'"),l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection")," = ",l.a.createElement("span",{className:"variable"},"db"),".",l.a.createElement("span",{className:"func"},"get_collection"),"(",l.a.createElement("span",{className:"variable"},"collection_name"),")",l.a.createElement("br",null),l.a.createElement("br",null),"//Usage",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"create"),"(",l.a.createElement("span",{className:"variable"},"element"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"read"),"(",l.a.createElement("span",{className:"variable"},"id"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"update"),"(",l.a.createElement("span",{className:"variable"},"id"),", ",l.a.createElement("span",{className:"variable"},"element"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"delete"),"(",l.a.createElement("span",{className:"variable"},"id"),")",l.a.createElement("br",null),l.a.createElement("br",null))}[e]},b="nodejs",p="python",E={nodejs:"npm install dbhub -s",python:"pip install dbhub"},d=function(e,a){return{nodejs:"const {getDatabase} = require('dbhub');\n\nlet apikey = '"+a+"';\nlet db = getDatabase(apiKey);\n\n// Create collection\nlet collectionName = 'example';\nlet collection = db.getCollection(collectionName);\n\n//Usage\ncollection.create(element).then((id) => {});\ncollection.read(id).then((element) => {});\ncollection.update(id, element).then((success) => {});\ncollection.delete(id).then((success) => {});",python:"import getDatabase = from 'dbhub'\n\napikey = '"+a+"'\ndb = get_database(apiKey)\n\n// Create collection\ncollectionName = 'example';\ncollection = db.get_collection(collection_name)\n\n//Usage\ncollection.create(element)\ncollection.read(id)\ncollection.update(id, element)\ncollection.delete(id)\n"}[e]};function N(e,a,t){a.includes("copied")||function(e,a,t){var n=document.createElement("textarea");n.setAttribute("visibility","collapse"),n.textContent=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),a(t)}(e,t,"copied")}function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;setTimeout((function(){e("")}),a)}var f=function(e){var a=Object(n.useState)(b),t=Object(i.a)(a,2),c=t[0],s=t[1],r=e.apiKey,m=Object(n.useState)("instructions"),f=Object(i.a)(m,2),g=f[0],h=f[1],y=Object(n.useState)(""),k=Object(i.a)(y,2),w=k[0],j=k[1],C=Object(n.useState)(""),x=Object(i.a)(C,2),O=x[0],A=x[1],_=Object(n.useState)(""),K=Object(i.a)(_,2),S=K[0],D=K[1];return Object(n.useEffect)((function(){"instructions"===g&&h("instructions appear"),w&&v(j),O&&v(A),S&&v(D)})),l.a.createElement("div",{className:g},l.a.createElement("div",{className:"languageToggle"},l.a.createElement("div",{className:c===b?"language toggled":"language",onClick:function(){return s(b)}},"Node js"),l.a.createElement("div",{className:c===p?"language toggled":"language",onClick:function(){return s(p)}},"Python")),l.a.createElement("h3",{className:"label"},"Your api key:"),l.a.createElement("div",{className:"apiKey "+O},l.a.createElement("div",{onClick:function(){return N(r,O,A)}},o),r),l.a.createElement("div",{className:"install "+w},l.a.createElement("div",{onClick:function(){return N(E[c],w,j)}},o),"$ ",E[c]),l.a.createElement("div",{className:"usage "+S},l.a.createElement("div",{onClick:function(){return N(d(c,r),S,D)}},o),u(c,r)))};t(14);var g=function(e){return l.a.createElement("button",{onClick:e.callback,className:"button"},e.name)};t(15);var h=function(e){return l.a.createElement("div",{className:"create_element"},l.a.createElement("h2",null,"Create database in one click"),l.a.createElement("h3",null,"Make it easy"),l.a.createElement(g,{name:"Create Database",callback:e.callback}))};var y=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(localStorage.getItem("apiKey")),r=Object(i.a)(s,2),o=r[0],u=r[1],b=o?l.a.createElement(f,{apiKey:o}):l.a.createElement(h,{callback:function(){return function(e){var a,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://dbhub.herokuapp.com","create-new-user",e(!0),n.next=5,m.a.awrap(fetch("https://dbhub.herokuapp.com/create-new-user"));case 5:if(a=n.sent,e(!1),!a.ok){n.next=15;break}return n.next=10,m.a.awrap(a.json());case 10:return t=n.sent,localStorage.setItem("apiKey",t),n.abrupt("return",t);case 15:return console.log("HTTP Error: "+a.status),n.abrupt("return",!1);case 17:case"end":return n.stop()}}))}(c).then((function(e){return u(e)}))}});return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},"DB",l.a.createElement("span",{className:"header-selection"},"hub")),l.a.createElement("div",{id:"loaderPlaceholder"}),l.a.createElement("div",{id:"loader",style:t?{animation:"3s ease-in-out infinite loading"}:{animation:"none"}}),b,l.a.createElement("div",{className:"signs"},"Created by @noxormy"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.545eb0a9.chunk.js.map