(this.webpackJsonpdbhub_front=this.webpackJsonpdbhub_front||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),s=t.n(c),r=(t(10),t(1)),m=t.n(r),i=t(2);t(12),t(13);var o=function(e){return l.a.createElement("button",{onClick:e.callback,className:"button"},e.name)};t(14);function u(e){var a=document.createElement("textarea");a.setAttribute("visibility","collapse"),a.textContent=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()}var p="const {getDatabase} = require('dbhub');\n\nlet apikey = '';\nlet db = getDatabase(apiKey);\n\n// Create collection\nlet collectionName = 'example';\nlet collection = db.getCollection(collectionName);\n\n//Usage\ncollection.create(element)\ncollection.read(id)\ncollection.update(id, element)\ncollection.delete(id)\n\n//Async\ncollection.create(element).then((id) => {});\ncollection.read(id).then((element) => {});\ncollection.update(id, element).then((success) => {});\ncollection.delete(id).then((success) => {});",E="npm install dbhub -s",b=function(e){var a=l.a.createElement("svg",{className:"copy",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},l.a.createElement("g",{"data-name":"Layer 3"},l.a.createElement("path",{d:"M40.63,13H12.38A4.69,4.69,0,0,0,7.7,17.67V57.31A4.69,4.69,0,0,0,12.38,62H40.63a4.69,4.69,0,0,0,4.69-4.69V17.67A4.69,4.69,0,0,0,40.63,13Zm2.69,44.33A2.69,2.69,0,0,1,40.63,60H12.38A2.69,2.69,0,0,1,9.7,57.31V17.67A2.69,2.69,0,0,1,12.38,15H40.63a2.69,2.69,0,0,1,2.69,2.69Z"}),l.a.createElement("path",{d:"M51.74,2H23.26a4.58,4.58,0,0,0-4.58,4.57v3.55a1,1,0,0,0,2,0V6.57A2.58,2.58,0,0,1,23.26,4H51.74A2.57,2.57,0,0,1,54.3,6.57V46.44A2.58,2.58,0,0,1,51.74,49H48.5a1,1,0,0,0,0,2h3.24a4.58,4.58,0,0,0,4.57-4.58V6.57A4.57,4.57,0,0,0,51.74,2Z"}))),t=l.a.createElement("p",null,l.a.createElement("div",{onClick:function(){return u(p)}},a),l.a.createElement("span",{className:"keyword"},"const")," ","{",l.a.createElement("span",{className:"variable"},"getDatabase"),"}"," =",l.a.createElement("span",{className:"func"}," require"),"(",l.a.createElement("span",{className:"string"},"'dbhub'"),");",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"apikey")," =",l.a.createElement("span",{className:"string"}," '",e.apiKey,"'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"db")," =",l.a.createElement("span",{className:"func"}," getDatabase"),"(",l.a.createElement("span",{className:"variable"},"apiKey"),");",l.a.createElement("br",null),l.a.createElement("br",null),"// Create collection",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"collectionName")," = ",l.a.createElement("span",{className:"string"},"'example'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"keyword"},"let")," ",l.a.createElement("span",{className:"variable"},"collection")," = ",l.a.createElement("span",{className:"variable"},"db"),".",l.a.createElement("span",{className:"func"},"getCollection"),"(",l.a.createElement("span",{className:"variable"},"collectionName"),");",l.a.createElement("br",null),l.a.createElement("br",null),"//Usage",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"create"),"(",l.a.createElement("span",{className:"variable"},"element"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"read"),"(",l.a.createElement("span",{className:"variable"},"id"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"update"),"(",l.a.createElement("span",{className:"variable"},"id"),", ",l.a.createElement("span",{className:"variable"},"element"),")",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"delete"),"(",l.a.createElement("span",{className:"variable"},"id"),")",l.a.createElement("br",null),l.a.createElement("br",null),"//Async",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"create"),"(",l.a.createElement("span",{className:"variable"},"element"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"id"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"read"),"(",l.a.createElement("span",{className:"variable"},"id"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"element"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"update"),"(",l.a.createElement("span",{className:"variable"},"id"),", ",l.a.createElement("span",{className:"variable"},"element"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"success"),") => ","{}",");",l.a.createElement("br",null),l.a.createElement("span",{className:"variable"},"collection"),".",l.a.createElement("span",{className:"func"},"delete"),"(",l.a.createElement("span",{className:"variable"},"id"),").",l.a.createElement("span",{className:"func"},"then"),"((",l.a.createElement("span",{className:"variable"},"success"),") => ","{}",");",l.a.createElement("br",null));return l.a.createElement("div",{className:"instructions"},l.a.createElement("div",{className:"install"},l.a.createElement("div",{onClick:function(){return u(E)}},a),"$ npm install dbhub -s"),l.a.createElement("div",{className:"usage"},t))};var d=function(e){return l.a.createElement("div",{className:"create_element"},l.a.createElement("h2",null,"Create database in one click"),l.a.createElement("h3",null,"Make it easy"),l.a.createElement(o,{name:"Create Database",callback:e.callback}))};var N=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),o=r[0],u=r[1],p=o?l.a.createElement(b,{apiKey:o}):l.a.createElement(d,{callback:function(){return function(e){var a,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://dbhub.herokuapp.com","create-new-user",e(!0),n.next=5,m.a.awrap(fetch("https://dbhub.herokuapp.com/create-new-user"));case 5:if(a=n.sent,e(!1),!a.ok){n.next=15;break}return n.next=10,m.a.awrap(a.json());case 10:return t=n.sent,console.log(t),n.abrupt("return",t);case 15:return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+a.status),n.abrupt("return",!1);case 17:case"end":return n.stop()}}))}(c).then((function(e){return u(e)}))}});return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},"DB",l.a.createElement("span",{className:"App-selection"},"hub")),l.a.createElement("div",{id:"loaderPlaceholder"}),l.a.createElement("div",{id:"loader",style:t?{animation:"3s ease-in-out infinite loading"}:{animation:"none"}}),p,l.a.createElement("div",{className:"signs"},"Created by @noxormy"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.23072d42.chunk.js.map