(this["webpackJsonpjust-beer-news"]=this["webpackJsonpjust-beer-news"]||[]).push([[0],{17:function(e,a,t){e.exports={OuterWrapper:"NewsView_OuterWrapper__1h_7g",Header:"NewsView_Header__3tS1D",Main:"NewsView_Main__3FJsk",H1:"NewsView_H1__6F7aM",H2:"NewsView_H2__3Kl_b",ReadMoreButton:"NewsView_ReadMoreButton__1kMuL",Center:"NewsView_Center__3N6wK"}},18:function(e,a,t){e.exports={OuterWrapper:"HomeView_OuterWrapper__1vzwS",Main:"HomeView_Main__2v_0E"}},22:function(e,a,t){e.exports={LoadingIcon:"LoadingIcon_LoadingIcon__1Dzjq",Jiggle:"LoadingIcon_Jiggle__1DkyG"}},25:function(e,a,t){e.exports={OuterWrapper:"App_OuterWrapper__x-XVZ"}},26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),i=t(12),o=(t(31),t(6)),s=t(7),m=t(11),u=t(22),_=t.n(u),p=function(e){return r.a.createElement("div",{className:_.a.LoadingIcon},r.a.createElement(m.c,null))},d=t(8),f=t.n(d),w=function(e){return e.data?r.a.createElement("div",{className:f.a.OuterWrapper,onClick:function(){return window.open(e.data.permalink.link,"_blank")}},e.data.images&&r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.data.images.share.desktop.link,")")},className:f.a.Image}),r.a.createElement("section",{className:f.a.Details},e.data.category&&r.a.createElement("h1",{className:f.a.H1},e.data.category.toUpperCase()),e.data.title&&r.a.createElement("h2",{className:f.a.H2},e.data.title),e.data.overview&&r.a.createElement("p",{className:f.a.P},e.data.overview),r.a.createElement("section",{className:f.a.Fade}))):r.a.createElement(p,null)},E=t(5),h=t.n(E),g=function(e){return r.a.createElement("header",{className:h.a.Header},r.a.createElement(m.c,{style:{fontSize:"1.5em",margin:"0px 5px"},className:h.a.Center}),r.a.createElement("h1",{className:[h.a.H1,h.a.Center].join(" ")},e.text),r.a.createElement(i.b,{to:e.link,className:h.a.ReadMoreButton},e.forward&&r.a.createElement(m.b,{style:{fontSize:"1.5em",margin:"0px 5px"},className:h.a.Center}),e.back&&r.a.createElement(m.a,{style:{fontSize:"1.5em",margin:"0px 5px"},className:h.a.Center}),r.a.createElement("h2",{className:[h.a.H2,h.a.Center].join(" ")},e.linkText)))},N=t(17),b=t.n(N),k=function(e){var a=Object(n.useState)({payload:[]}),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),m=o[0],u=o[1],_=Object(n.useState)([]),d=Object(s.a)(_,2),f=d[0],E=d[1];return Object(n.useEffect)((function(){u(!0),fetch("https://just-beer-8681.herokuapp.com/justBeerProxy.php").then((function(e){return e.json()})).then((function(e){l(e),u(!1)})).catch((function(e){console.error(e),u(!1)}))}),[]),Object(n.useEffect)((function(){var e=c.payload.sort((function(e,a){return e.id<a.id})),a=[];e.forEach((function(e){a.find((function(a){return a.id===e.id}))||a.push(e)})),E(a)}),[c]),r.a.createElement("div",{className:b.a.OuterWrapper},r.a.createElement(g,{text:"Latest Posts",linkText:"Home",back:!0,link:"/"}),r.a.createElement("main",{className:b.a.Main},m&&r.a.createElement(p,null),f.length>0&&!m?f.map((function(e,a){return r.a.createElement(w,{key:a,data:e})})):r.a.createElement("h2",null,"Oops! Spilled my beer on the latest paper. Check back soon!")))},H=t(9),O=t.n(H),v=function(e){return r.a.createElement("div",{className:O.a.OuterWrapper,onClick:function(){return window.open(e.data.permalink.link,"_blank")}},e.data.images&&r.a.createElement("img",{src:e.data.images.thumb.mobile.link,alt:"",className:O.a.Image}),r.a.createElement("section",{className:O.a.Details},e.data.category&&r.a.createElement("h1",{className:O.a.H1},e.data.category.toUpperCase()),e.data.title&&r.a.createElement("h2",{className:O.a.H2},e.data.title),e.data.overview&&r.a.createElement("p",{className:O.a.P},e.data.overview),r.a.createElement("section",{className:O.a.Fade})))},y=function(e){return r.a.createElement(r.a.Fragment,null,e.articles&&e.articles.length>0?e.articles.map((function(a,t){return r.a.createElement("section",{key:t},r.a.createElement(v,{data:a}),t<e.articles.length-1?r.a.createElement("div",{style:{outline:"1px solid lightgrey"}}):void 0)})):r.a.createElement("h2",{style:{}},"No news is good news. Check back soon!"))},j=t(18),I=t.n(j),x=function(e){var a=Object(n.useState)({payload:[]}),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),m=o[0],u=o[1],_=Object(n.useState)([]),d=Object(s.a)(_,2),f=d[0],w=d[1];return Object(n.useEffect)((function(){u(!0),fetch("https://just-beer-8681.herokuapp.com/justBeerProxy.php").then((function(e){return console.log(e),e.json()})).then((function(e){l(e),u(!1)})).catch((function(e){console.error(e),u(!1)}))}),[]),Object(n.useEffect)((function(){var e=c.payload.length>=6?6:c.payload.length,a=c.payload.slice(0,e);w(a)}),[c]),r.a.createElement("div",{className:I.a.OuterWrapper},r.a.createElement(g,{text:"Latest Posts",linkText:"More",forward:!0,link:"/articles/all"}),r.a.createElement("main",{className:I.a.Main},m?r.a.createElement(p,null):r.a.createElement(y,{articles:f})))},A=t(25),W=t.n(A);var V=function(){return r.a.createElement("div",{className:W.a.OuterWrapper},r.a.createElement(o.a,{key:"/",exact:!0,path:"/",component:x}),r.a.createElement(o.a,{key:"/articles/all",exact:!0,path:"/articles/all",component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{basename:"/"},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports={Header:"ViewHeader_Header__DUTyD",H1:"ViewHeader_H1__29KPk",H2:"ViewHeader_H2__DHDRZ",Center:"ViewHeader_Center__3HFrp",ReadMoreButton:"ViewHeader_ReadMoreButton__13yQk"}},8:function(e,a,t){e.exports={OuterWrapper:"NewsArticleItem_OuterWrapper__itBZV",Image:"NewsArticleItem_Image__1gh9g",Details:"NewsArticleItem_Details__1rZAR",H1:"NewsArticleItem_H1__1dMH5",H2:"NewsArticleItem_H2__1bUH5",P:"NewsArticleItem_P__269Qf",Fade:"NewsArticleItem_Fade__3_QAF"}},9:function(e,a,t){e.exports={OuterWrapper:"ArticleItem_OuterWrapper__U5YTY",Image:"ArticleItem_Image__1rAPa",Details:"ArticleItem_Details__2eGbL",H1:"ArticleItem_H1__5aAbz",H2:"ArticleItem_H2__147h-",P:"ArticleItem_P__3OQ9b",Fade:"ArticleItem_Fade__1DfmS"}}},[[26,1,2]]]);
//# sourceMappingURL=main.9a75a6e7.chunk.js.map