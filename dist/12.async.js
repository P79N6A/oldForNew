(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"3DXh":function(e,t,a){e.exports={numberInfo:"antd-pro-components-number-info-index-numberInfo",suffix:"antd-pro-components-number-info-index-suffix",numberInfoTitle:"antd-pro-components-number-info-index-numberInfoTitle",numberInfoSubTitle:"antd-pro-components-number-info-index-numberInfoSubTitle",numberInfoValue:"antd-pro-components-number-info-index-numberInfoValue",subTotal:"antd-pro-components-number-info-index-subTotal",numberInfolight:"antd-pro-components-number-info-index-numberInfolight"}},"7Zm1":function(e,t,a){e.exports={trendItem:"antd-pro-components-trend-index-trendItem",down:"antd-pro-components-trend-index-down",up:"antd-pro-components-trend-index-up",trendItemGrey:"antd-pro-components-trend-index-trendItemGrey",reverseColor:"antd-pro-components-trend-index-reverseColor"}},LOQS:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL"));a("Pwec");var r=n(a("CtXQ")),i=n(a("lSNA")),s=n(a("QILm")),o=n(a("q1tI")),d=n(a("TSYQ")),u=n(a("3DXh")),c=function(e){var t=e.theme,a=e.title,n=e.subTitle,c=e.total,f=e.subTotal,p=e.status,m=e.suffix,g=e.gap,y=(0,s.default)(e,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return o.default.createElement("div",(0,l.default)({className:(0,d.default)(u.default.numberInfo,(0,i.default)({},u.default["numberInfo".concat(t)],t))},y),a&&o.default.createElement("div",{className:u.default.numberInfoTitle,title:"string"===typeof a?a:""},a),n&&o.default.createElement("div",{className:u.default.numberInfoSubTitle,title:"string"===typeof n?n:""},n),o.default.createElement("div",{className:u.default.numberInfoValue,style:g?{marginTop:g}:null},o.default.createElement("span",null,c,m&&o.default.createElement("em",{className:u.default.suffix},m)),(p||f)&&o.default.createElement("span",{className:u.default.subTotal},f,p&&o.default.createElement(r.default,{type:"caret-".concat(p)}))))},f=c;t.default=f},ViAK:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=n(a("cVA7")),i=function(e){return l.default.createElement(r.default,{option:e.data,style:{height:"212px",width:"100%"},className:"react_for_echarts"})},s=i;t.default=s},Wr5o:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=n(a("cVA7")),i=(n(a("MT78")),function(e){return l.default.createElement(r.default,{option:e.data,style:{height:"350px",width:"100%"},className:"react_for_echarts"})}),s=i;t.default=s},YR7N:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL"));a("Pwec");var r=n(a("CtXQ")),i=n(a("lSNA")),s=n(a("QILm")),o=n(a("q1tI")),d=n(a("TSYQ")),u=n(a("7Zm1")),c=function(e){var t,a=e.colorful,n=void 0===a||a,c=e.reverseColor,f=void 0!==c&&c,p=e.flag,m=e.children,g=e.className,y=(0,s.default)(e,["colorful","reverseColor","flag","children","className"]),h=(0,d.default)(u.default.trendItem,(t={},(0,i.default)(t,u.default.trendItemGrey,!n),(0,i.default)(t,u.default.reverseColor,f&&n),t),g);return o.default.createElement("div",(0,l.default)({},y,{className:h,title:"string"===typeof m?m:""}),o.default.createElement("span",{className:u.default.value},m),p&&o.default.createElement("span",{className:u.default[p]},o.default.createElement(r.default,{type:"caret-".concat(p)})))},f=c;t.default=f},ZOrW:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("14J3");var i=n(a("BMrR"));a("jCWc");var s=n(a("kPKH")),o=n(a("pVnL"));a("5Dmo");var d=n(a("3S7+"));a("Pwec");var u=n(a("CtXQ")),c=n(a("lwsE")),f=n(a("W8MJ")),p=n(a("a1gu")),m=n(a("Nsbk")),g=n(a("7W2i"));a("iQDF");var y=n(a("+eQT"));a("Znn+");for(var h,b,v=n(a("ZTPi")),x=l(a("q1tI")),T=a("MuoO"),S=a("LLXN"),E=n(a("ViAK")),I=n(a("Wr5o")),L=a("KTCi"),k=(n(a("YR7N")),n(a("LOQS")),n(a("ZhIB")),n(a("v99g"))),w=(n(a("Umy/")),a("+n12")),D=n(a("MT78")),C=n(a("lVjH")),N=(v.default.TabPane,y.default.RangePicker,[]),P=0;P<7;P+=1)N.push({title:"\u5de5\u4e13\u8def ".concat(P," \u53f7\u5e97"),total:323234});var V=(h=(0,T.connect)(function(e){var t=e.activities,a=e.loading;return{activities:t,loading:a.effects["chart/fetch"],indexDetailListLoading:a.effects["activities/fetchIndexDetailList"]}}),h(b=function(e){function t(e){var a;(0,c.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.state={salesType:"all",currentTabKey:"",rangePickerValue:(0,w.getTimeDistance)("year")},a.handleChangeSalesType=function(e){a.setState({salesType:e.target.value})},a.handleTabChange=function(e){a.setState({currentTabKey:e})},a.handleRangePickerChange=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:e}),t({type:"chart/fetchSalesData"})},a.selectDate=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:(0,w.getTimeDistance)(e)}),t({type:"chart/fetchSalesData"})},a.rankingListData=[];for(var n=0;n<7;n+=1)a.rankingListData.push({title:(0,S.formatMessage)({id:"app.analysis.test"},{no:n}),total:323234});return a.state={salesType:"all",currentTabKey:"",loading:!0,rangePickerValue:(0,w.getTimeDistance)("year")},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"activities/fetchIndexDetailList"}),this.props.dispatch({type:"activities/getIndexSaleList"}),this.props.dispatch({type:"activities/getIndexOrderList"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"chart/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"isActive",value:function(e){var t=this.state.rangePickerValue,a=(0,w.getTimeDistance)(e);return t[0]&&t[1]&&t[0].isSame(a[0],"day")&&t[1].isSame(a[1],"day")?C.default.currentDate:""}},{key:"render",value:function(){var e=this,t=this.state,a=(t.rangePickerValue,t.salesType,t.loading);t.currentTabKey;console.log(this.props);var n=this.props.activities,l=n.dashBoard,c=n.saleListDate,f=n.saleListTurnover,p=n.orderListDate,m=n.orderListTurnover,g=(a||stateLoading,{title:{text:"\u8fd1\u4e03\u65e5\u8425\u4e1a\u989d",left:"center",textStyle:{color:"#ccc",fontSize:10}},backgroundColor:"#08263a",xAxis:[{show:!0,data:c,axisLabel:{textStyle:{color:"#ccc"}}},{show:!1,data:c}],tooltip:{},visualMap:{show:!1,min:0,max:50,dimension:0,inRange:{color:["#4a657a","#308e92","#b1cfa5","#f5d69f","#f5898b","#ef5055"]}},yAxis:{axisLine:{show:!1},axisLabel:{textStyle:{color:"#ccc"}},splitLine:{show:!0,lineStyle:{color:"#08263f"}},axisTick:{show:!1}},series:[{name:"Simulate Shadow",type:"line",data:f,z:2,showSymbol:!1,animationDelay:0,animationEasing:"linear",animationDuration:1200,lineStyle:{normal:{color:"transparent"}},areaStyle:{normal:{color:"#08263a",shadowBlur:50,shadowColor:"#000"}}},{name:"\u8425\u4e1a\u989d",type:"bar",data:f,xAxisIndex:1,z:3,itemStyle:{normal:{barBorderRadius:5}}}],animationEasing:"elasticOut",animationEasingUpdate:"elasticOut",animationDelay:function(e){return 20*e},animationDelayUpdate:function(e){return 20*e}}),y={title:{text:"\u6700\u8fd17\u5929\u7528\u6237\u8bbf\u95ee\u91cf",left:"50%",show:!1,textAlign:"center"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#ddd"}},backgroundColor:"rgba(255,255,255,1)",padding:[5,10],textStyle:{color:"#7588E4"},extraCssText:"box-shadow: 0 0 5px rgba(0,0,0,0.3)"},legend:{right:20,orient:"vertical"},xAxis:{type:"category",data:p,boundaryGap:!1,splitLine:{show:!0,interval:"auto",lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:10,textStyle:{fontSize:10}}},yAxis:{type:"value",splitLine:{lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:0,textStyle:{fontSize:8}}},series:[{name:"",type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:m,areaStyle:{normal:{color:new D.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(216, 244, 247,1)"},{offset:1,color:"rgba(216, 244, 247,1)"}],!1)}},itemStyle:{normal:{color:"#58c8da"}},lineStyle:{normal:{width:3}}}]},h={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:24}};return x.default.createElement(k.default,null,x.default.createElement(i.default,{gutter:24},l.map(function(t,a){return x.default.createElement(s.default,(0,o.default)({},h,{key:a}),x.default.createElement(L.ChartCard,{bordered:!1,title:t.title,action:x.default.createElement(d.default,{title:x.default.createElement(S.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"introduce"})},x.default.createElement(u.default,{type:"info-circle-o"})),loading:e.props.indexDetailListLoading,total:function(){return x.default.createElement("div",null,t.value)},contentHeight:46}))})),x.default.createElement(i.default,null,x.default.createElement(s.default,{className:"gutter-row"},x.default.createElement("div",{className:"gutter-box"},x.default.createElement(r.default,{bordered:!1,className:"no-padding"},x.default.createElement(E.default,{data:g}))))),x.default.createElement(i.default,null,x.default.createElement(s.default,null,x.default.createElement(r.default,{bordered:!1},x.default.createElement("div",{className:"pb-m"},x.default.createElement("small",null,"\u8fd17\u65e5\u8ba2\u5355\u6570")),x.default.createElement(I.default,{data:y})))))}}]),t}(x.Component))||b),R=V;t.default=R},lVjH:function(e,t,a){e.exports={iconGroup:"antd-pro-pages-dashboard-analysis-iconGroup",rankingList:"antd-pro-pages-dashboard-analysis-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-salesExtraWrap"}}}]);