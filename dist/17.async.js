(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{jksV:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),s=n(a("o0o1")),u=a("dCQc"),d={namespace:"find",state:{total:0,records:[]},effects:{getFindList:s.default.mark(function e(t,a){var n,r,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(u.getFindList,t.data);case 3:return d=e.sent,e.next=6,r({type:"save",payload:d.data});case 6:case"end":return e.stop()}},e,this)}),deldteEventStatus:s.default.mark(function e(t,a){var n,r,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(u.delPhoto,t.data);case 3:return d=e.sent,e.next=6,r({type:"save",payload:d.data});case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,r.default)({},e,a)},clear:function(){return{total:0,records:[]}}}};t.default=d}}]);