"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4031],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(u,".").concat(s)]||k[s]||i[s]||l;return a?n.createElement(N,p(p({ref:e},d),{},{components:a})):n.createElement(N,p({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10285:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"shenyu",title:"\u76d1\u63a7 Apache ShenYu API\u7f51\u5173",sidebar_label:"ShenYu\u7f51\u5173\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","ShenYu\u7f51\u5173\u76d1\u63a7\u76d1\u63a7"]},p=void 0,m={unversionedId:"help/shenyu",id:"help/shenyu",title:"\u76d1\u63a7 Apache ShenYu API\u7f51\u5173",description:"\u5bf9 ShenYu \u7f51\u5173\u7684\u8fd0\u884c\u72b6\u6001\uff08JVM\u76f8\u5173\uff09\uff0c\u8bf7\u6c42\u54cd\u5e94\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/shenyu.md",sourceDirName:"help",slug:"/help/shenyu",permalink:"/zh-cn/docs/help/shenyu",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/shenyu.md",tags:[],version:"current",frontMatter:{id:"shenyu",title:"\u76d1\u63a7 Apache ShenYu API\u7f51\u5173",sidebar_label:"ShenYu\u7f51\u5173\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","ShenYu\u7f51\u5173\u76d1\u63a7\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Tomcat\u76d1\u63a7",permalink:"/zh-cn/docs/help/tomcat"},next:{title:"DynamicTp\u7ebf\u7a0b\u6c60\u76d1\u63a7",permalink:"/zh-cn/docs/help/dynamic_tp"}},u={},o=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1ashenyu_request_total",id:"\u6307\u6807\u96c6\u5408shenyu_request_total",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ashenyu_request_throw_created",id:"\u6307\u6807\u96c6\u5408shenyu_request_throw_created",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aprocess_cpu_seconds_total",id:"\u6307\u6807\u96c6\u5408process_cpu_seconds_total",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aprocess_open_fds",id:"\u6307\u6807\u96c6\u5408process_open_fds",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aprocess_max_fds",id:"\u6307\u6807\u96c6\u5408process_max_fds",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_info",id:"\u6307\u6807\u96c6\u5408jvm_info",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_bytes_used",id:"\u6307\u6807\u96c6\u5408jvm_memory_bytes_used",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_used",id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_used",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_committed",id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_committed",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_max",id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_max",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ajvm_threads_state",id:"\u6307\u6807\u96c6\u5408jvm_threads_state",level:4}],d={toc:o};function i(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9 ShenYu \u7f51\u5173\u7684\u8fd0\u884c\u72b6\u6001\uff08JVM\u76f8\u5173\uff09\uff0c\u8bf7\u6c42\u54cd\u5e94\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002         ")),(0,r.kt)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u5728 ShenYu \u7f51\u5173\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"metrics"),"\u63d2\u4ef6\uff0c\u66b4\u9732\u5bf9\u5e94\u7684 prometheus metrics \u63a5\u53e3\u3002  "),(0,r.kt)("p",null,"\u5f00\u542f\u63d2\u4ef6, \u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/plugin-center/observability/metrics-plugin"},"\u5b98\u65b9\u6587\u6863"),"  "),(0,r.kt)("p",null,"\u4e3b\u8981\u5982\u4e0b\u4e24\u6b65\u9aa4: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 metrics \u7684\u4f9d\u8d56\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u7f51\u5173\u7684\u914d\u7f6eyaml\u6587\u4ef6\u4e2d\u7f16\u8f91\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  metrics:\n    enabled: true  #\u8bbe\u7f6e\u4e3a true \u8868\u793a\u5f00\u542f\n    name : prometheus \n    host: 127.0.0.1 #\u66b4\u9732\u7684ip\n    port: 8090 #\u66b4\u9732\u7684\u7aef\u53e3\n    jmxConfig: #jmx\u914d\u7f6e\n    props:\n      jvm_enabled: true #\u5f00\u542fjvm\u7684\u76d1\u63a7\u6307\u6807\n")),(0,r.kt)("p",null,"\u6700\u540e\u91cd\u542f\u8bbf\u95ee\u7f51\u5173\u6307\u6807\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://ip:8090")," \u54cd\u5e94 prometheus \u683c\u5f0f\u6570\u636e\u5373\u53ef\u3002   "),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u6307\u6807\u63a5\u53e3\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a8090\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP\u8bf7\u6c42\u54cd\u5e94\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408shenyu_request_total"},"\u6307\u6807\u96c6\u5408\uff1ashenyu_request_total"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u96c6ShenYu\u7f51\u5173\u7684\u6240\u6709\u8bf7\u6c42\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408shenyu_request_throw_created"},"\u6307\u6807\u96c6\u5408\uff1ashenyu_request_throw_created"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u96c6ShenYu\u7f51\u5173\u7684\u5f02\u5e38\u8bf7\u6c42\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408process_cpu_seconds_total"},"\u6307\u6807\u96c6\u5408\uff1aprocess_cpu_seconds_total"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u548c\u7cfb\u7edfCPU\u603b\u8ba1\u6240\u7528\u7684\u79d2\u6570")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408process_open_fds"},"\u6307\u6807\u96c6\u5408\uff1aprocess_open_fds"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408process_max_fds"},"\u6307\u6807\u96c6\u5408\uff1aprocess_max_fds"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6700\u5927\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_info"},"\u6307\u6807\u96c6\u5408\uff1ajvm_info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runtime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u7248\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vendor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u7248\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u7248\u672c\u4fe1\u606f")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_memory_bytes_used"},"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_bytes_used"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"area"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u5185\u5b58\u533a\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a JVM \u5185\u5b58\u533a\u57df\u7684\u5df2\u7528\u5927\u5c0f")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_used"},"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_used"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u5185\u5b58\u6c60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a JVM \u5185\u5b58\u6c60\u7684\u5df2\u7528\u5927\u5c0f")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_committed"},"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_committed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u5185\u5b58\u6c60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a JVM \u5185\u5b58\u6c60\u7684\u5df2\u63d0\u4ea4\u5927\u5c0f")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_memory_pool_bytes_max"},"\u6307\u6807\u96c6\u5408\uff1ajvm_memory_pool_bytes_max"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM \u5185\u5b58\u6c60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a JVM \u5185\u5b58\u6c60\u7684\u6700\u5927\u5927\u5c0f")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408jvm_threads_state"},"\u6307\u6807\u96c6\u5408\uff1ajvm_threads_state"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7ebf\u7a0b\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf")))))}i.isMDXComponent=!0}}]);