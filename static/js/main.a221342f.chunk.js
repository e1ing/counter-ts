(this["webpackJsonpcounter-ts"]=this["webpackJsonpcounter-ts"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),l=(a(44),a(45),a(16)),i=a(72),u=a(76),o=a(73),j=a(4);function b(e){var t="incorrect value"===e.error||"enter value and press set"===e.error||e.counter===e.maxValue;return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(u.a,{style:{margin:100},error:t,margin:"dense",children:"incorrect value"===e.error||"enter value and press set"===e.error?e.error:e.counter}),Object(j.jsxs)(i.a,{className:"buttons-block",children:[Object(j.jsx)(o.a,{style:{margin:"10px"},variant:"contained",size:"large",color:"primary",className:"button-style",disabled:e.counter===e.maxValue,onClick:e.increaseValue,children:"INC"}),Object(j.jsx)(o.a,{style:{margin:"10px"},variant:"contained",color:"primary",size:"large",onClick:e.resetValue,className:"button-style",children:"RESET"})]})]})}var m=a(68),x=a(69),O=a(70),d=a(32),g=a(33),v=a(74);function V(e){var t=e.value,a=e.changeValue,n=Object(g.a)(e,["value","changeValue"]);return Object(j.jsx)(v.a,Object(d.a)({style:{margin:20},type:"number",value:t,color:"primary",onChange:function(e){a(+e.currentTarget.value)}},n))}var f=a(77),y=function(e){var t=e.maxValue<=e.minValue||e.maxValue<0||e.maxValue===e.minValue,a=e.minValue<0||e.maxValue===e.minValue;return Object(j.jsxs)(i.a,{children:[Object(j.jsxs)(i.a,{children:[Object(j.jsx)(i.a,{style:{margin:20},children:" max value "}),Object(j.jsx)(V,{value:e.maxValue,changeValue:e.setMaxValue,error:t}),Object(j.jsx)(i.a,{style:{margin:20},children:" start value "}),Object(j.jsx)(V,{value:e.minValue,changeValue:e.setMinValue,error:a})]}),Object(j.jsx)(i.a,{children:Object(j.jsx)(o.a,{style:{margin:"70px",justifyContent:"center"},startIcon:Object(j.jsx)(f.a,{}),size:"large",variant:"contained",color:"secondary",onClick:e.setDisplayValue,className:"button-style",disabled:e.errorState,children:"SET"})})]})};function h(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(l.a)(c,2),i=s[0],u=s[1],o=Object(n.useState)(0),d=Object(l.a)(o,2),g=d[0],v=d[1],V=Object(n.useState)(""),f=Object(l.a)(V,2),h=f[0],p=f[1],S=Object(n.useState)(!1),C=Object(l.a)(S,2),I=C[0],N=C[1],k=function(){i===a||a<0||i<0||i<a?(p("incorrect value"),N(!0)):(p("enter value and press set"),N(!1))};return Object(n.useEffect)((function(){var e=localStorage.getItem("maxKey");e&&u(JSON.parse(e));var t=localStorage.getItem("minKey");t&&r(JSON.parse(t))}),[]),Object(n.useEffect)((function(){localStorage.setItem("maxKey",JSON.stringify(i)),localStorage.setItem("minKey",JSON.stringify(a)),k()}),[i,a]),Object(j.jsx)(m.a,{fixed:!0,children:Object(j.jsxs)(x.a,{container:!0,spacing:3,style:{padding:"30px 0px"},justify:"center",alignItems:"center",children:[Object(j.jsx)(O.a,{style:{margin:20},elevation:3,children:Object(j.jsx)(y,{minValue:a,maxValue:i,setMinValue:function(e){r(e),k()},setMaxValue:function(e){u(e),k()},setDisplayValue:function(){p(" "),v(a)},errorState:I})}),Object(j.jsx)(O.a,{style:{margin:20},elevation:3,children:Object(j.jsx)(b,{increaseValue:function(){return v(g+1)},resetValue:function(){return v(0)},counter:g,maxValue:i,minValue:a,errorCase:k,error:h,errorState:I})})]})})}var p=function(){return Object(j.jsx)(h,{})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.a221342f.chunk.js.map