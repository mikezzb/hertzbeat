"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[2098],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(n),u=i,g=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2e4:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"ping",title:"Monitoring\uff1aPING connectivity",sidebar_label:"PING connectivity",keywords:["open source monitoring system","open source network monitoring system","monitoring ping metrics"]},o=void 0,l={unversionedId:"help/ping",id:"version-v1.1.x/help/ping",title:"Monitoring\uff1aPING connectivity",description:"Ping the opposite end HOST address and judge its connectivity.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/ping.md",sourceDirName:"help",slug:"/help/ping",permalink:"/docs/v1.1.x/help/ping",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/ping.md",tags:[],version:"v1.1.x",frontMatter:{id:"ping",title:"Monitoring\uff1aPING connectivity",sidebar_label:"PING connectivity",keywords:["open source monitoring system","open source network monitoring system","monitoring ping metrics"]},sidebar:"docs",previous:{title:"HTTP API",permalink:"/docs/v1.1.x/help/api"},next:{title:"Port availability",permalink:"/docs/v1.1.x/help/port"}},p={},c=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asummary",id:"metric-setsummary",level:4}],m={toc:c};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ping the opposite end HOST address and judge its connectivity.    ")),(0,i.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,i.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,i.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ping timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the timeout when Ping does not respond to data, unit:ms, default: 3000ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,i.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,i.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,i.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,i.kt)("h4",{id:"metric-setsummary"},"Metric set\uff1asummary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,i.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,i.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"responseTime"),(0,i.kt)("td",{parentName:"tr",align:null},"ms"),(0,i.kt)("td",{parentName:"tr",align:null},"Website response time")))))}s.isMDXComponent=!0}}]);