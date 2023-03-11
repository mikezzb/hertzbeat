"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<a;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(87462),o=(n(67294),n(3905));const a={title:"Monitoring Linux Operating Systems Using Open Source Real-Time Monitoring HertzBeat",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["Open source monitoring system","operating system monitoring","Linux monitoring"]},r=void 0,l={permalink:"/blog/2023/02/15/monitor-linux",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-02-15-monitor-linux.md",source:"@site/blog/2023-02-15-monitor-linux.md",title:"Monitoring Linux Operating Systems Using Open Source Real-Time Monitoring HertzBeat",description:"Use the open source real-time monitoring system HertzBeat to monitor and alarm the Linux operating system, and it will be done in 5 minutes!",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.45,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Monitoring Linux Operating Systems Using Open Source Real-Time Monitoring HertzBeat",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["Open source monitoring system","operating system monitoring","Linux monitoring"]},nextItem:{title:"Use the open source real-time monitoring system HertzBeat to monitor and alert Mysql database",permalink:"/blog/2023/02/11/monitor-mysql"}},s={authorsImageUrls:[void 0]},m=[{value:"Use the open source real-time monitoring system HertzBeat to monitor and alarm the Linux operating system, and it will be done in 5 minutes!",id:"use-the-open-source-real-time-monitoring-system-hertzbeat-to-monitor-and-alarm-the-linux-operating-system-and-it-will-be-done-in-5-minutes",level:2},{value:"Introduction to HertzBeat",id:"introduction-to-hertzbeat",level:3},{value:"Get Linux Monitoring Done in HertzBeat in 5 Minutes",id:"get-linux-monitoring-done-in-hertzbeat-in-5-minutes",level:3},{value:"Prerequisites, you already have a Linux environment and a HertzBeat environment.",id:"prerequisites-you-already-have-a-linux-environment-and-a-hertzbeat-environment",level:4},{value:"Add monitoring of the Linux operating system to the monitoring page of the open source monitoring system HertzBeat",id:"add-monitoring-of-the-linux-operating-system-to-the-monitoring-page-of-the-open-source-monitoring-system-hertzbeat",level:4},{value:"3. Add Linux indicator threshold alarm in HertzBeat system",id:"3-add-linux-indicator-threshold-alarm-in-hertzbeat-system",level:4},{value:"Finished, now wait for the warning message to come. ding ding ding ding",id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2},{value:"What is Hertz Beat?",id:"what-is-hertz-beat",level:2},{value:"\u26c4 Supported",id:"-supported",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"use-the-open-source-real-time-monitoring-system-hertzbeat-to-monitor-and-alarm-the-linux-operating-system-and-it-will-be-done-in-5-minutes"},"Use the open source real-time monitoring system HertzBeat to monitor and alarm the Linux operating system, and it will be done in 5 minutes!"),(0,o.kt)("h3",{id:"introduction-to-hertzbeat"},"Introduction to HertzBeat"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HertzBeat is an open source, easy-to-use and friendly real-time monitoring system that does not require Agent and has powerful custom monitoring capabilities.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate ",(0,o.kt)("strong",{parentName:"li"},"monitoring-alarm-notification"),", support monitoring of application services, databases, operating systems, middleware, cloud native, etc., threshold alarms, alarm notifications (email WeChat Dingding Feishu SMS Slack Discord Telegram)."),(0,o.kt)("li",{parentName:"ul"},"It configurable protocol specifications such as Http, Jmx, Ssh, Snmp, Jdbc, etc. You only need to configure YML to use these protocols to customize and collect any indicators you want to collect. Do you believe that you can immediately adapt to a new monitoring type such as K8s or Docker just by configuring YML?"),(0,o.kt)("li",{parentName:"ul"},"HertzBeat's powerful customization, multi-type support, easy expansion, and low coupling, hope to help developers and small and medium teams quickly build their own monitoring systems.")),(0,o.kt)("p",null,"Github: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,o.kt)("h3",{id:"get-linux-monitoring-done-in-hertzbeat-in-5-minutes"},"Get Linux Monitoring Done in HertzBeat in 5 Minutes"),(0,o.kt)("h4",{id:"prerequisites-you-already-have-a-linux-environment-and-a-hertzbeat-environment"},"Prerequisites, you already have a Linux environment and a HertzBeat environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HertzBeat ",(0,o.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Installation and deployment documentation"))),(0,o.kt)("h4",{id:"add-monitoring-of-the-linux-operating-system-to-the-monitoring-page-of-the-open-source-monitoring-system-hertzbeat"},"Add monitoring of the Linux operating system to the monitoring page of the open source monitoring system HertzBeat"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click Add Linux Monitoring")),(0,o.kt)("p",null,"Path: Menu -> Operating System Monitoring -> Linux Operating System -> Add Linux Operating System Monitoring"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(30340).Z,width:"4064",height:"2166"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Configure the parameters required for new monitoring Linux")),(0,o.kt)("p",null,"Fill in the Linux ",(0,o.kt)("strong",{parentName:"p"},"peer IP"),", ",(0,o.kt)("strong",{parentName:"p"},"SSH port")," (default 22), ",(0,o.kt)("strong",{parentName:"p"},"account password, etc.")," on the monitoring page, and finally click OK to add.\nFor other parameters such as ",(0,o.kt)("strong",{parentName:"p"},"collection interval"),", ",(0,o.kt)("strong",{parentName:"p"},"timeout period"),", etc., please refer to the help document ",(0,o.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/mysql/"},"https://hertzbeat.com/docs/help/mysql/")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(60139).Z,width:"4064",height:"2166"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Complete \u2705, now we have added the monitoring of Linux, check the monitoring list to see our added items.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(98998).Z,width:"4064",height:"2166"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Operation"),"->",(0,o.kt)("strong",{parentName:"li"},"Monitoring Details Icon")," of the monitoring list item to browse the real-time monitoring indicator data of Linux.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(60515).Z,width:"4064",height:"2166"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(67400).Z,width:"4064",height:"2166"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Monitoring History Details TAB")," to browse the historical monitoring indicator data chart of Linux\ud83d\udcc8.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(291).Z,width:"4064",height:"2166"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(15194).Z,width:"4064",height:"2166"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DONE! Done! To sum up, it only takes one step")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On the HertzBeat monitoring page, configure the IP port account password and add Linux monitoring"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Through the above two steps, we have completed the monitoring of Linux. We can view the monitoring details and indicators in HertzBeat at any time to observe its service status.\nOf course, just looking at it is definitely not perfect. Monitoring is often accompanied by alarm thresholds. When Linux performance indicators exceed our expectations or are abnormal, we can promptly notify our corresponding person in charge. The person in charge receives the notification and handles the problem. It is a complete monitoring and alarm process.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next, we will demonstrate step by step how to configure threshold alarm notifications in the HertzBeat system, so that when Linux indicators are found to be abnormal, they will be notified to us in time")),(0,o.kt)("h4",{id:"3-add-linux-indicator-threshold-alarm-in-hertzbeat-system"},"3. Add Linux indicator threshold alarm in HertzBeat system"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure an alarm threshold for an important indicator")),(0,o.kt)("p",null,"Path: Menu -> Threshold Rules -> Add Threshold"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the configured indicator object. Linux monitors mainly related indicators such as cpu, memory, disk, network performance, etc. For example, we set the threshold for the indicator ",(0,o.kt)("inlineCode",{parentName:"li"},"CPU utilization")," ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"usage"),". When the Linux cpu utilization is greater than 90% When a warning is issued."),(0,o.kt)("li",{parentName:"ul"},"Here we configure to send an alarm when the ",(0,o.kt)("inlineCode",{parentName:"li"},"usage>90")," of this indicator ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu"),", the alarm level is ",(0,o.kt)("strong",{parentName:"li"},"Warning Alarm"),", which will be triggered after three times, as shown in the figure below.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(15349).Z,width:"4064",height:"2166"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(1616).Z,width:"4064",height:"2166"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add message notification recipients")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configure the receiver to let the alarm message know who to send and how to send it.")),(0,o.kt)("p",null,"Path: Menu -> Alarm Notification -> Alarm Recipient -> Add New Recipient"),(0,o.kt)("p",null,"Message notification methods support ",(0,o.kt)("strong",{parentName:"p"},"email, DingTalk, WeChat Work, Feishu, WebHook, SMS"),", etc. Here we take the commonly used DingTalk as an example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refer to this ",(0,o.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"Help Documentation")," ",(0,o.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," to configure the robot on DingTalk and set the security custom keyword ",(0,o.kt)("inlineCode",{parentName:"li"},"HertzBeat "),", get the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"access_token")," value."),(0,o.kt)("li",{parentName:"ul"},"Configure the receiver parameters in HertzBeat as follows.")),(0,o.kt)("p",null,"\u3010Alarm Notification\u3011->\u3010New Recipient\u3011->\u3010Select DingTalk Robot Notification Method\u3011->\u3010Set DingTalk Robot ACCESS_TOKEN\u3011->\u3010OK\u3011"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(41711).Z,width:"3436",height:"890"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Configure the associated alarm notification strategy \u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configure the alarm notification policy to bind the alarm message with the receiver, so that you can decide which alarms to send to whom.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hertzbeat",src:n(60315).Z,width:"3436",height:"1088"})),(0,o.kt)("h3",{id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding"},"Finished, now wait for the warning message to come. ding ding ding ding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[HertzBeat warning notification]\nAlarm target object: linux.cpu.usage\nAffiliated monitoring ID: 483783444839382\nBelonging monitoring name: Linux_182.33.34.2\nAlarm level: warning alarm\nAlarm trigger time: 2023-02-15 21:13:44\nContent details: The linux cpu usage is too high. now is 95.\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This practical article took us to experience how to use the open source real-time monitoring system HertzBeat to monitor Linux indicator data. We can find that HertzBeat, which integrates ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring-alarm-notification"),", is more convenient in operation and use. Linux can be included in the monitoring and alarm notification, and there is no need to deploy multiple components and write configuration files.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only one docker command is needed to install and experience heartbeat:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.kt)("h2",{id:"what-is-hertz-beat"},"What is Hertz Beat?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat Hertz Beat")," is a real-time monitoring and alarm system with powerful custom monitoring capabilities and no Agent required. Monitoring of application services, databases, operating systems, middleware, cloud native, etc., threshold alarms, and alarm notifications (email, WeChat, Dingding, Feishu, SMS, Discord, Slack, Telegram).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We make protocol specifications such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc")," configurable, and you only need to configure YML to use these protocols to customize and collect any indicators you want to collect.\nDo you believe that you can immediately adapt to a new monitoring type such as K8s or Docker just by configuring YML?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The powerful customization of ",(0,o.kt)("inlineCode",{parentName:"p"},"HertzBeat"),", multi-type support, easy expansion, and low coupling, hope to help developers and small and medium-sized teams quickly build their own monitoring systems.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),"\n",(0,o.kt)("strong",{parentName:"p"},"Gitee: ",(0,o.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))),(0,o.kt)("h2",{id:"-supported"},"\u26c4 Supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website Monitoring, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap, Ssl Certificate, SpringBoot, FTP Server"),(0,o.kt)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Dameng, OpenGauss, ClickHouse, IoTDB"),(0,o.kt)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,o.kt)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ\n-Kubernetes, Docker"),(0,o.kt)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,o.kt)("li",{parentName:"ul"},"Notification support ",(0,o.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Mail")," ",(0,o.kt)("inlineCode",{parentName:"li"},"DingTalk")," ",(0,o.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Feishu")," ",(0,o.kt)("inlineCode",{parentName:"li"},"SMS")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Webhook"),".")))}p.isMDXComponent=!0},41711:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},30340:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-1-f5f2bd10b67c861ed02b71d6360f21e6.png"},60139:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-2-07f1b6a0dec9524c6bb1c705ddfb90f3.png"},98998:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-3-d7bf8ceaee68a94f7e436a0dcaf4c811.png"},60515:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-4-121d61bc7497e10352fe764f094a9398.png"},291:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-5-4eb4e6eaec6a5d72b162d64ff7dd5456.png"},15194:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-6-758282e06b02fc2d96dca7521e42ccb2.png"},67400:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-7-436797db9ab725d6fd6c6f92878a64f2.png"},15349:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-8-6aaf2f53362be98bcf58b187d70e2532.png"},1616:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitor-linux-9-1f7d0e58a752559ce186757607f289b8.png"}}]);