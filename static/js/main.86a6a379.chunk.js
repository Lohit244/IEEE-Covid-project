(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(12),r=c.n(n),o=(c(29),c(9)),j=(c(30),c(38)),i=c(2);var d=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)([]),d=Object(o.a)(r,2),l=d[0],h=d[1];Object(a.useEffect)((function(){fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(e){console.log("done"),n(!0),h(e)}))}),[]);var b=l.filter((function(t){return t.country.toLowerCase().includes(e.term.toLowerCase())}));return e.func(l),Object(i.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Country"}),Object(i.jsx)("th",{children:"Cases"}),Object(i.jsx)("th",{children:"Deaths"}),Object(i.jsx)("th",{children:"New Cases"}),Object(i.jsx)("th",{children:"New Deaths"}),Object(i.jsx)("th",{children:"Recovered"}),Object(i.jsx)("th",{children:"Active"}),Object(i.jsx)("th",{children:"Critical"})]})}),Object(i.jsxs)("tbody",{children:[!s&&Object(i.jsx)("p",{children:"Loading..."}),b.map((function(e,t){return Object(i.jsxs)("tr",{className:"Data-Elem",children:[Object(i.jsx)("td",{className:"country",children:e.country}),Object(i.jsxs)("td",{className:"cases",children:[" ",e.cases]}),Object(i.jsx)("td",{className:"deaths text-danger",children:e.deaths}),Object(i.jsx)("td",{className:"todayCases",children:e.todayCases}),Object(i.jsx)("td",{className:"todayDeaths text-danger",children:e.todayDeaths}),Object(i.jsx)("td",{className:"recovered text-success",children:e.recovered}),Object(i.jsx)("td",{className:"active",children:e.active}),Object(i.jsx)("td",{className:"critical text-danger",children:e.critical})]},t)}))]})]})},l=(c(32),c(44)),h=c(43),b=c(46),O=c(45),x=c(47),u=c(39),v=c(40),p=c(41),f=c(42);var g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){if(navigator.geolocation)navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,c=e.coords.longitude;console.log(t,c)}));else{console.log("No Location");var e=0,t=0}console.log(e,t),console.log("https://api.mapbox.com/geocoding/v5/mapbox.places/"+t+","+e+".json?&access_token=pk.eyJ1IjoibG9oaXQyNDQiLCJhIjoiY2twNWZoZ3MzMHU4YjJ4cjJkcWhvZWZvNiJ9.qrQoAp1hwFBvf98GYdvh1Q"),fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+t+","+e+".json?&access_token=pk.eyJ1IjoibG9oaXQyNDQiLCJhIjoiY2twNWZoZ3MzMHU4YjJ4cjJkcWhvZWZvNiJ9.qrQoAp1hwFBvf98GYdvh1Q").then((function(e){return e.json()})).then((function(e){s(e.features[0].place_name)}))}),[]),Object(i.jsx)(u.a,{children:Object(i.jsx)(v.a,{children:Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(f.a,{sm:6,children:[Object(i.jsx)("h1",{children:" Your Country "}),c]}),Object(i.jsxs)(f.a,{sm:6,children:[Object(i.jsx)("h1",{children:"World "}),Object(i.jsx)("br",{}),"data -",Object(i.jsx)("br",{}),"active",Object(i.jsx)("br",{}),"total",Object(i.jsx)("br",{}),"deaths",Object(i.jsx)("br",{}),"new cases",Object(i.jsx)("br",{}),"new deaths",Object(i.jsx)("br",{}),"critical"]})]})})})};var m=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),j=r[0],u=r[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(l.a,{bg:"primary",variant:"dark",expand:"lg",sticky:"top",children:[Object(i.jsx)(l.a.Brand,{href:"#home",children:"Covid Tracker"}),Object(i.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(i.jsx)(h.a,{className:"mr-auto",children:Object(i.jsx)(h.a.Link,{href:"#table",variant:"dark",children:"World Data"})}),Object(i.jsx)(b.a,{type:"search",placeholder:"Search",md:"4",className:"w-50",onChange:function(e){s(e.target.value)},value:c})]})]}),Object(i.jsx)(g,{it:j}),Object(i.jsx)(O.a,{className:"text-center",defaultActiveKey:"0",children:Object(i.jsxs)(x.a,{id:"table",children:[Object(i.jsx)(O.a.Toggle,{as:x.a.Header,eventKey:"0",children:"World Data"}),Object(i.jsx)(O.a.Collapse,{eventKey:"0",children:Object(i.jsx)(x.a.Body,{children:Object(i.jsx)(d,{term:c,func:u})})})]})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.86a6a379.chunk.js.map