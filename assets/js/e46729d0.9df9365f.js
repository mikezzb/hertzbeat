"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4414],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(r),h=n,b=s["".concat(i,".").concat(h)]||s[h]||c[h]||o;return r?a.createElement(b,l(l({ref:e},m),{},{components:r})):a.createElement(b,l({ref:e},m))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59867:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.6 \u53d1\u5e03\uff0cLinux\u76d1\u63a7\u6765\u5566",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},l=void 0,p={permalink:"/blog/2022/03/20/hertzbeat-v1.0-beta.6",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2022-03-20-hertzbeat-v1.0-beta.6.md",source:"@site/blog/2022-03-20-hertzbeat-v1.0-beta.6.md",title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.6 \u53d1\u5e03\uff0cLinux\u76d1\u63a7\u6765\u5566",description:"HertzBeat\u8d6b\u5179\u8df3\u52a8\u662f\u7531Dromara\u5b75\u5316\uff0cTanCloud\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5168\u7ad9\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",date:"2022-03-20T00:00:00.000Z",formattedDate:"March 20, 2022",tags:[{label:"opensource",permalink:"/blog/tags/opensource"}],readingTime:4.575,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.6 \u53d1\u5e03\uff0cLinux\u76d1\u63a7\u6765\u5566",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"HertzBeat\u5165GVP\u5566\uff0c\u5e76 v1.0.beta.7 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf",permalink:"/blog/2022/04/08/hertzbeat-v1.0-beta.7"},nextItem:{title:"HertzBeat\u8d6b\u5179\u8282\u62cd v1.0.beta.5 \u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf",permalink:"/blog/2022/03/10/hertzbeat-v1.0-beta.5"}},i={authorsImageUrls:[void 0]},u=[{value:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6",id:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6",level:5}],m={toc:u};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HertzBeat\u8d6b\u5179\u8df3\u52a8\u662f\u7531Dromara\u5b75\u5316\uff0cTanCloud\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5168\u7ad9\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002"),(0,n.kt)("p",null,"\u5b98\u7f51:hertzbeat.com | tancloud.cn"),(0,n.kt)("p",null,"\u6b64\u5347\u7ea7\u7248\u672c\u5305\u542b\u4e86\u5f88\u591a\u540c\u5b66\u9700\u8981\u7684Linux\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u652f\u6301\uff0c\u652f\u6301\u5176CPU\uff0c\u5185\u5b58\uff0c\u78c1\u76d8\uff0c\u7f51\u7edc\u7b49\u6307\u6807\uff0c\u91cd\u8981\u7684\u662f\u540c\u6b65\u652f\u6301\u4e86SSH\u81ea\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5199\u811a\u672c\u76d1\u63a7\u6211\u4eec\u60f3\u8981\u7684Linux\u6307\u6807\uff0c\u4e5f\u65b0\u589e\u4e86\u5bf9\u4e3b\u6d41\u7684\u6570\u636e\u5e93SqlServer\u76d1\u63a7\u652f\u6301\u7b49\uff0c\u66f4\u591a\u529f\u80fd\u6b22\u8fce\u4f7f\u7528\u3002     "),(0,n.kt)("p",null,"\u7248\u672c\u7279\u6027\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"feature \u65b0\u589e\u652f\u6301Linux\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u7c7b\u578b(\u652f\u6301CPU\u5185\u5b58\u78c1\u76d8\u7f51\u5361\u7b49\u76d1\u63a7\u6307\u6807) (#20)"),(0,n.kt)("li",{parentName:"ol"},"feature \u65b0\u589e\u652f\u6301microsoft sqlserver\u6570\u636e\u5e93\u76d1\u63a7\u7c7b\u578b (#37)"),(0,n.kt)("li",{parentName:"ol"},"feature \u6dfb\u52a0docker-compose\u90e8\u7f72\u65b9\u6848 (#27) \u7531 @jx10086 \u8d21\u732e thanks"),(0,n.kt)("li",{parentName:"ol"},"feature \u76d1\u63a7\u5217\u8868\u652f\u6301\u72b6\u6001\u8fc7\u6ee4\u548c\u5b57\u6bb5\u641c\u7d22\u529f\u80fd (#29)"),(0,n.kt)("li",{parentName:"ol"},"feature \u65b0\u589emysql,postgresql\u7b49\u6570\u636e\u5e93\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e (#18) \u7531 @\u5b66\u4e60\u4ee3\u7801\u7684\u5c0f\u767d \u8d21\u732e"),(0,n.kt)("li",{parentName:"ol"},"[\u7eb3\u7ba1]","\u4fee\u6539\u4e3a","[\u76d1\u63a7]","\u8868\u8ff0,","[\u63a2\u6d4b]","\u4fee\u6539\u4e3a","[\u6d4b\u8bd5]","\u8868\u8ff0"),(0,n.kt)("li",{parentName:"ol"},"feature add github build and translate action (#22)"),(0,n.kt)("li",{parentName:"ol"},"feature \u65b0\u589e\u8d21\u732e\u6307\u5357\uff0c\u672c\u5730\u4ee3\u7801\u542f\u52a8\u6587\u6863"),(0,n.kt)("li",{parentName:"ol"},"docs \u6307\u5b9amysql\u548ctdengine\u7248\u672c\uff0c\u907f\u514d\u73af\u5883\u95ee\u9898")),(0,n.kt)("p",null,"BUG\u4fee\u590d"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"fix \u7531\u4e8e\u94fe\u63a5\u590d\u7528\u4e0d\u4f73\u9020\u6210\u521b\u5efa\u8fc7\u591a\u94fe\u63a5\u76d1\u63a7\u5f02\u5e38 (#26)"),(0,n.kt)("li",{parentName:"ol"},"fix \u9875\u9762\u5168\u5c40\u76d1\u63a7\u641c\u7d22\u7ed3\u679c\u5f02\u5e38 (#28) issue by @Suremotoo"),(0,n.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u4f18\u5316 #I4U9BT \u7531 @\u5b66\u4e60\u4ee3\u7801\u7684\u5c0f\u767d \u8d21\u732e"),(0,n.kt)("li",{parentName:"ol"},"fix \u670d\u52a1\u542f\u52a8\u811a\u672c\u5076\u73b0\u7aef\u53e3\u5360\u7528\u8bef\u5224\u95ee\u9898"),(0,n.kt)("li",{parentName:"ol"},"\u65f6\u95f4\u672c\u5730\u65f6\u533a\u683c\u5f0f\u5316 (#35)"),(0,n.kt)("li",{parentName:"ol"},"fix \u6b64\u7248\u672c\u5f15\u5165\u95ee\u9898jdbc\u89e3\u6790\u5f02\u5e38 (#36)"),(0,n.kt)("li",{parentName:"ol"},"fix jdbc\u5e76\u53d1\u6ce8\u518c\u52a0\u8f7d\u65f6\u7531\u4e8espi\u673a\u5236\u52a0\u8f7d\u6b7b\u9501\u95ee\u9898 (#40)")),(0,n.kt)("p",null,"\u6b22\u8fce\u5728\u7ebf\u8bd5\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,n.kt)("hr",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat\u8d6b\u5179\u8df3\u52a8")," \u662f\u7531",(0,n.kt)("a",{parentName:"p",href:"https://dromara.org"},"Dromara"),"\u5b75\u5316\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"SAAS\u7248\u672c\u76d1\u63a7\u4e91")),"\uff0c\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"\u767b\u5f55\u5373\u53ef\u514d\u8d39\u5f00\u59cb")),"\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/advanced/extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7")," ,\u53ea\u7528\u901a\u8fc7\u914d\u7f6eYML\u6587\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6307\u6807\uff0c\u6765\u6ee1\u8db3\u5e38\u89c1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat \u6a21\u5757\u5316\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," \u5404\u4e2a\u6a21\u5757\u89e3\u8026\u5408\uff0c\u65b9\u4fbf\u7406\u89e3\u4e0e\u5b9a\u5236\u5f00\u53d1\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u544a\u8b66\u914d\u7f6e(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c\u652f\u6301\u544a\u8b66\u901a\u77e5\uff0c\u544a\u8b66\u6a21\u7248\uff0c\u90ae\u4ef6\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49\u53ca\u65f6\u901a\u77e5\u9001\u8fbe",(0,n.kt)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u767b\u5f55 HertzBeat \u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u4e91\u73af\u5883TanCloud")," \u8bd5\u7528\u53d1\u73b0\u66f4\u591a\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6211\u4eec\u6b63\u5728\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u6b22\u8fce\u53c2\u4e0e\u52a0\u5165\u4e00\u8d77\u5171\u5efa\u9879\u76ee\u5f00\u6e90\u751f\u6001\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.kt)("p",null,"\u8001\u94c1\u4eec\u53ef\u4ee5\u901a\u8fc7\u6f14\u793a\u89c6\u9891\u6765\u76f4\u89c2\u4e86\u89e3\u529f\u80fd\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Vi4y1f7i8"},"https://www.bilibili.com/video/BV1Vi4y1f7i8")),(0,n.kt)("h5",{id:"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6"},"\u6b22\u8fce\u8054\u7cfb\u4ea4\u6d41\u54e6"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u4ea4\u6d41\u7fa4"),"   "),(0,n.kt)("p",null,"\u52a0\u5fae\u4fe1\u53f7 tan-cloud \u6216 \u626b\u63cf\u4e0b\u9762\u8d26\u53f7\u4e8c\u7ef4\u7801\u62c9\u8fdb\u5fae\u4fe1\u7fa4\u3002   "),(0,n.kt)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/tan-cloud-wechat.jpg",width:"200"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"QQ\u4ea4\u6d41\u7fa4"),"  "),(0,n.kt)("p",null,"\u52a0QQ\u7fa4\u53f7 718618151 \u6216 \u626b\u63cf\u4e0b\u9762\u7684\u7fa4\u4e8c\u7ef4\u7801\u8fdb\u7fa4, \u9a8c\u8bc1\u4fe1\u606f: tancloud"),(0,n.kt)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/qq-qr.jpg",width:"200"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4ed3\u5e93\u5730\u5740"),"      "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"Github")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"Gitee")," ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"),"    "),(0,n.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u4e0d\u59a8\u7ed9\u4e2aStar\u54e6\uff0c\u7070\u5e38\u611f\u8c22\uff0c\u5f2f\u8170!!"))}c.isMDXComponent=!0}}]);