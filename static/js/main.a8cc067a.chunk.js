(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(12),a(13);function o(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," ")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},e.about)))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlF:!0,or:"flexSwitchCheckDefault"},"Enable Dark Mode"))))}function s(e){const[t,a]=Object(n.useState)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:t,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},onChange:e=>{a(e.target.value)},id:"myBox",rows:"15"})),l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowecase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let n=t.split(/[ ]+/);a(n.join(" ")),e.showAlert("Extra spaces removed","success")}},"Remove extra spaces"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is Coppied on clipboard","success")}},"Copy"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let n=t.trim();a(n),e.showAlert("Whitespaces has been removed from starting","success")}},"Trim"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{a(""),e.showAlert("Input field is reset","success")}},"Reset"))),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,t.split(" ").length," words and ",t.length," characters"),l.a.createElement("p",null,.008*t.split(" ").length," Minutes to read"),l.a.createElement("h2",null,"Preview:"),l.a.createElement("p",null,t.length>0?t:"Enter something in the textbox above to priview it here")))}function m(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type))," ",e.alert.msg)}o.defaultProps={title:"Set Title Here",about:"About"};var i=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},3e3)};return l.a.createElement(l.a.Fragment,null,"      ",l.a.createElement(o,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",c("Dark mode has been enabled","success"),document.title="TextUtils-DarkMode"):(t("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"),document.title="TextUtils-LightMode")}}),l.a.createElement(m,{alert:a}),l.a.createElement(s,{showAlert:c,heading:"Enter the text to analyze",mode:e}))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.a8cc067a.chunk.js.map