(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{30:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var r=c(2),a=c(12),s=c.n(a),n=c(13),l=c.n(n),i=c(23),o=c(6),u=c(7),j=c(9),d=c(8),h=c(10),m=c(24),p=c(3),b="refresh",x="refresh_week",v={temperature:NaN,humid:"",weatherType:"",locationName:"",obsDate:"",obsHrMin:""};var O={dateWeekArr:[],wTypeWeekArr:[],lowestTempWeekArr:[],highestTempWeekArr:[]};var f=Object(h.b)({wInfoResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.data;if(c===b){var a=r.temperature,s=r.humid,n=r.weatherType,l=r.locationName,i=r.obsDate,o=r.obsHrMin;return s=100*parseFloat(s),o=o.split(":")[0]+":"+o.split(":")[1],Object(p.a)(Object(p.a)({},e),{},{temperature:a,humid:s,weatherType:n,locationName:l,obsDate:i,obsHrMin:o})}return e},wInfoWeekResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.data;if(c===x){for(var a=r.dateWeekArr,s=r.wTypeWeekArr,n=r.lowestTempWeekArr,l=r.highestTempWeekArr,i=0;i<a.length;i++)a[i]=a[i].split(" ")[0].split("-")[1]+"/"+a[i].split(" ")[0].split("-")[2],n[i]=n[i].split("\u81f3")[0].split("\u6c0f")[1],l[i]=l[i].split("\u81f3")[1].replace(/\\u5ea6/,"");return Object(p.a)(Object(p.a)({},e),{},{dateWeekArr:a,wTypeWeekArr:s,lowestTempWeekArr:n,highestTempWeekArr:l})}return e}}),y=Object(h.c)(f,Object(h.a)(m.a)),w=new Map([["\u96ea","sn"],["\u96f7","t"],["\u96fb","t"],["\u5927\u96e8","hr"],["\u96e8","lr"],["\u591a\u96f2","hc"],["\u96f2","lc"],["\u6674","c"],["\u9670","hc"]]),N=["\u96ea","\u96f7","\u96fb","\u5927\u96e8","\u96e8","\u591a\u96f2","\u96f2","\u6674","\u9670"];function g(e){var t=!1;void 0===e&&(e="\u96f2");for(var c=0;c<N.length;c++)if(e.includes(N[c]))return t=!0,N[c];if(!t)return"\u7121\u6cd5\u5c0d\u61c9\u5929\u6c23\u985e\u578b"}var T=function(e){var t=g(e);return w.has(t)?"".concat("https://www.metaweather.com/static/img/weather/").concat(w.get(t),".svg"):"\u7121\u6cd5\u7372\u53d6\u5929\u6c23\u985e\u578b\u5716\u7247"},k=(c(30),c(0)),W=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleWeekData=function(){for(var e=y.getState().wInfoWeekResult,t=[],c=0;c<7;c++)t[c]={date:e.dateWeekArr[c],wType:e.wTypeWeekArr[c],highestTemp:e.highestTempWeekArr[c],loweshestTemp:e.lowestTempWeekArr[c]};return t},e.handleWTypeSvg=function(e){return"\u6674"===e?Object(k.jsx)("svg",{viewBox:"-50 -50 100 100",children:Object(k.jsx)("circle",{className:"sun",cx:"0",cy:"0",r:"20"})}):"\u96f2"===e||"\u591a\u96f2"===e||"\u9670"===e?Object(k.jsxs)("svg",{style:{width:"40px",height:"40px"},viewBox:"-50 -50 100 100",children:[Object(k.jsx)("circle",{className:"sun",cx:"0",cy:"0",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"0",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-15",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-30",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-25",cy:"5",r:"15"}),Object(k.jsx)("circle",{className:"cloud",cx:"-7",cy:"10",r:"15"})]}):"\u96e8"===e||"\u5927\u96e8"===e?Object(k.jsxs)("svg",{viewBox:"-63 -30 100 100",children:[Object(k.jsx)("line",{className:"rain",x1:"-25",y1:"15",x2:"-25",y2:"35"}),Object(k.jsx)("line",{className:"rain",x1:"-14",y1:"5",x2:"-14",y2:"25"}),Object(k.jsx)("line",{className:"rain",x1:"-5",y1:"20",x2:"-5",y2:"45"}),Object(k.jsx)("circle",{className:"cloud",cx:"0",cy:"30",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-15",cy:"30",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-30",cy:"30",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-25",cy:"10",r:"15"}),Object(k.jsx)("circle",{className:"cloud",cx:"-7",cy:"15",r:"15"})]}):Object(k.jsxs)("svg",{viewbox:"-50 -50 100 100",children:[Object(k.jsx)("circle",{className:"sun",cx:"0",cy:"0",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"0",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-15",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-30",cy:"25",r:"20"}),Object(k.jsx)("circle",{className:"cloud",cx:"-25",cy:"5",r:"15"}),Object(k.jsx)("circle",{className:"cloud",cx:"-7",cy:"10",r:"15"})]})},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this,t=this.handleWeekData();return Object(k.jsx)("div",{className:"bottom",children:t.map((function(t,c){return Object(k.jsxs)("div",{className:"dayweather",children:[Object(k.jsx)("h3",{children:t.date}),Object(k.jsxs)("h3",{children:[t.highestTemp,"\xb0C"]}),Object(k.jsxs)("h3",{className:"loweshestTemp",children:[t.loweshestTemp,"\xb0C"]}),e.handleWTypeSvg(g(t.wType)),Object(k.jsx)("h4",{children:t.wType})]},c)}))})}}]),c}(r.Component),A=c(14),D=c.n(A),C="\u81fa\u5317",B="\u81fa\u4e2d",I="\u5609\u7fa9",E={"\u81fa\u5317":"F-D0047-063","\u81fa\u4e2d":"F-D0047-075","\u5609\u7fa9":"F-D0047-031","\u9ad8\u96c4":"F-D0047-067"},M=function(e){var t="https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=".concat(e);D.a.get(t).then((function(t){var c,r=t.data.records.location[0].weatherElement,a=r.find((function(e){return"TEMP"===e.elementName})),s=r.find((function(e){return"HUMD"===e.elementName})),n=r.find((function(e){return"Weather"===e.elementName})),l=t.data.records.location[0].parameter.find((function(e){return"CITY"===e.parameterName})),i=t.data.records.location[0].time.obsTime,o=i.split(" ")[0],u=i.split(" ")[1];y.dispatch((c={temperature:parseInt(a.elementValue),humid:s.elementValue,weatherType:n.elementValue,locationName:l.parameterValue,obsDate:o,obsHrMin:u},{type:b,data:c})),function(e){var t="https://opendata.cwb.gov.tw/api/v1/rest/datastore/".concat(e,"?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&format=JSON&elementName=WeatherDescription&sort=time");D.a.get(t).then((function(e){for(var t=e.data.records.locations[0].location[0].weatherElement[0],c=new Array(7).fill(null),r=new Array(7).fill(null),a=new Array(7).fill(null),s=new Array(7).fill(null),n=0,l=0,i=1;i<=13;i+=2)c[n]=t.time[i].startTime,r[n]=t.time[i].elementValue[0].value.split("\u3002")[0],l=i>=7?-1:0,a[n]=t.time[i].elementValue[0].value.split("\u3002")[2+l],s[n]=t.time[i].elementValue[0].value.split("\u3002")[2+l],n++;var o={dateWeekArr:c,wTypeWeekArr:r,lowestTempWeekArr:a,highestTempWeekArr:s};console.log(o),y.dispatch(function(e){return{type:x,data:e}}(o));var u=y.getState();console.log(u)})).catch((function(e){console.log("\u7372\u53d6\u4e00\u9031\u5929\u6c23\u932f\u8aa4\uff0c\u5176\u539f\u56e0\u70ba",e)}))}(E[e])})).catch((function(e){return console.log("\u7372\u53d6\u7576\u65e5\u5929\u6c23\u932f\u8aa4\uff0c\u5176\u539f\u56e0\u70ba",e)}))};c(50);var H=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={debounceTimer:null},e.refreshInfo=Object(i.a)(l.a.mark((function t(){var c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.selectedRegion.value,t.next=3,M(c);case 3:r=t.sent,console.log(r);case 5:case"end":return t.stop()}}),t)}))),e.debounceHandler=function(t,c){var r=e.state.debounceTimer;return function(){null!==r&&clearTimeout(r),r=setTimeout((function(){t(),r=null}),c)}},e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.refreshInfo();var e=y.getState();console.log(e)}},{key:"render",value:function(){var e=this,t=y.getState().wInfoResult;return Object(k.jsx)("div",{className:"daybox",children:Object(k.jsxs)("label",{children:[Object(k.jsxs)("div",{className:"top",children:[Object(k.jsx)("img",{className:"weatherType",src:T(t.weatherType),alt:t.weatherType}),Object(k.jsxs)("div",{className:"text-area",children:[Object(k.jsxs)("div",{className:"temperature",children:[t.temperature,"\xb0C"]}),Object(k.jsxs)("div",{className:"address",children:["\u5730\u5340:\xa0",t.locationName]}),Object(k.jsxs)("div",{className:"infos",children:[Object(k.jsxs)("div",{className:"humidity",children:["\u6fd5\u5ea6:\xa0",t.humid,"%"]}),Object(k.jsxs)("div",{className:"time",children:["\u65e5\u671f\u2003",t.obsDate]}),Object(k.jsxs)("div",{children:["\u89c0\u6e2c\u6642\u9593\u2003",t.obsHrMin]})]})]})]}),Object(k.jsxs)("div",{className:"choose-area",children:[Object(k.jsx)("text",{children:"\u9078\u64c7\u5730\u5340"}),Object(k.jsxs)("select",{ref:function(t){return e.selectedRegion=t},children:[Object(k.jsx)("optgroup",{label:"\u5317\u90e8"}),Object(k.jsx)("option",{value:C,children:C}),Object(k.jsx)("optgroup",{label:"\u4e2d\u90e8"}),Object(k.jsx)("option",{value:B,children:B}),Object(k.jsx)("optgroup",{label:"\u5357\u90e8"}),Object(k.jsx)("option",{value:I,children:I})]}),Object(k.jsx)("button",{onClick:this.debounceHandler(this.refreshInfo,1e3),children:"\u5237\u65b0"})]}),Object(k.jsx)(W,{})]})})}}]),c}(r.Component);s.a.render(Object(k.jsx)(H,{}),document.getElementById("root")),y.subscribe((function(){s.a.render(Object(k.jsx)(H,{}),document.getElementById("root"))}))}},[[51,1,2]]]);
//# sourceMappingURL=main.285d5a9b.chunk.js.map